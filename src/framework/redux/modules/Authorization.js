import { useContext } from 'react'
import Dispatch from '../Dispatch';
import SecurityContext from '../../../pages/routing/SecurityContext';

const INITIALIZE = 'authorization/INITIALIZE';
const LOGOUT = 'authorization/LOGOUT';
const UPDATE_TOKEN = 'authorization/UPDATE_TOKEN';

const initialState = {
	keycloak: null,
	token: null,
	user: { username: null }
};

const TOKEN_REFRESH_RATE = 30;

export default function reducer(state = initialState, action) {
	console.log('auth.action.type' + action.type)
	console.log(action)
	switch (action.type) {
		case Dispatch.successAction(INITIALIZE):
		case Dispatch.successAction(UPDATE_TOKEN): {
			return {
				...state,
				...action.payload,
			};
		}
		case Dispatch.successAction(LOGOUT): {
			return {
				...initialState,
			};
		}
		default:
			return state;
	}
}

export function initialize(authContext) {
	return (dispatch, getState) => {
		console.log('auth.initialize')
		scheduleTokenRefresh(dispatch, authContext);
		console.log("initialize.auth.kc " + JSON.stringify(authContext))
		const { keycloak } = authContext || {}
		const { token, idTokenParsed: { preferred_username } } = keycloak || {};

		Dispatch.success(dispatch, INITIALIZE, { keycloak, token, user: { username: preferred_username } });
	};
}

const updateToken = token => dispatch => Dispatch.success(dispatch, UPDATE_TOKEN, { token });

const scheduleTokenRefresh = (dispatch, authContext) => {
	console.log("auth.scheduleTokenRefresh")
	const { keycloak } = authContext || {};
	setInterval(() => {
		keycloak
			.updateToken(TOKEN_REFRESH_RATE)
			.success(refreshed => {
				if (refreshed) {
					dispatch(updateToken(keycloak.token));
				} // else, token is still valid
			})
			.error(() => {
				// eslint-disable-next-line no-console
				console.error('Failed to retrieve an updated token or session has expired.');
				dispatch(logout({ now: true }));
			});
	}, TOKEN_REFRESH_RATE * 1000);
};

export const logout = (now = true, keycloak) => {
	return function (dispatch) {
		console.log("auth.logout")
		if (!keycloak) {
			return
		}
		if (true) {
			if (keycloak && keycloak.authenticated) {
				Dispatch.success(dispatch, LOGOUT);
				keycloak.logout()
			}
		} else {
			setTimeout(() => {
				Dispatch.success(dispatch, LOGOUT);
				keycloak.logout();
			}, 5000);
		}
	}
}

export function logoutNow({ now }) {
	return (dispatch, getState) => {
		const { authContext } = getState();
		const { auth: { keycloak } } = authContext || {};
		if (now) {
			Dispatch.success(dispatch, LOGOUT);
			keycloak.logout();
		} else {
			setTimeout(() => {
				Dispatch.success(dispatch, LOGOUT);
				keycloak.logout();
			}, 5000);
		}
	};
}




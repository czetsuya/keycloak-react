/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
import Dispatch from '../Dispatch';

const INITIALIZE = 'authorization/INITIALIZE';
const LOGOUT = 'authorization/LOGOUT';
const UPDATE_TOKEN = 'authorization/UPDATE_TOKEN';

const initialState = {
	keycloak: null,
	token: null,
	user: { username: null },
	loginUrl: null,
	logoutUrl: null,
	registerUrl: null,
	accountUrl: null
};

const TOKEN_REFRESH_RATE = 30;

export default function reducer(state = initialState, action) {
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
		scheduleTokenRefresh(dispatch, authContext)
		const { keycloak } = authContext || {}
		const { token, idTokenParsed: { preferred_username } } = keycloak || {}
		const login = keycloak.login
		const loginUrl = keycloak.createLoginUrl()
		const logoutUrl = keycloak.createLogoutUrl()
		const logout = keycloak.logout
		const registerUrl = keycloak.createRegisterUrl()
		const accountUrl = keycloak.createAccountUrl()

		Dispatch.success(dispatch, INITIALIZE, { keycloak, token, user: { username: preferred_username }, login, loginUrl, logout, logoutUrl, registerUrl, accountUrl });
	};
}

const updateToken = token => dispatch => Dispatch.success(dispatch, UPDATE_TOKEN, { token });

const scheduleTokenRefresh = (dispatch, authContext) => {
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

export const logout = (now = true) => {
	return function (dispatch, getState) {
		const { authContext } = getState() || {}
		const { keycloak, logoutUrl, logout } = authContext || {}

		if (!keycloak) {
			return
		}

		if (now) {
			if (keycloak && keycloak.authenticated) {
				Dispatch.success(dispatch, LOGOUT);
				logout({ redirectUri: logoutUrl })
			}
		} else {
			setTimeout(() => {
				Dispatch.success(dispatch, LOGOUT);
				logout({ redirectUri: logoutUrl })
			}, 5000);
		}
	}
}
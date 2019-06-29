import Dispatch from '../Dispatch';

export const PAGE_LOADING = 'page/LOADING';

const initialState = {
	isLoading: false
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Dispatch.loadingAction(PAGE_LOADING): {
			return {
				...state,
				isLoading: true
			};
		}
		case Dispatch.successAction(PAGE_LOADING): {
			return {
				...state,
				isLoading: false
			};
		}
		default:
			return state;
	}
}

export const startLoading = dispatch => {
	dispatch({ type: Dispatch.loadingAction(PAGE_LOADING) });
}

export const stopLoading = dispatch => {
	dispatch({ type: Dispatch.successAction(PAGE_LOADING) });
}
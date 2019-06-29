import Dispatch from '../Dispatch';
import CustomerService from '../../../api-services/ff-api/Customers';
import { SUCCESS } from '../../../models/Response';
import * as PageActions from './Page'

const LIST = 'customers/LIST';
const CREATE = 'menu/CREATE';
const RETRIEVE = 'customers/RETRIEVE';
const UPDATE = 'menu/UPDATE';
/*
const DELETE = 'menu/DELETE';
*/

const initialState = {
	selected: {},
	list: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Dispatch.loadingAction(LIST): {
			return {
				...state
			};
		}
		case Dispatch.successAction(LIST): {
			return {
				...state,
				list: [...action.payload._embedded.customers]
			};
		}
		case Dispatch.successAction(RETRIEVE): {
			return {
				...state,
				selected: { ...action.payload },
			};
		}
		default:
			return state;
	}
}

export const list = () => dispatch => {
	Dispatch.loading(dispatch, LIST);
	CustomerService.list()
		.then(response => {
			Dispatch.done(dispatch, LIST, response);
		});
};

export const create = customer => dispatch => {
	Dispatch.loading(dispatch, CREATE);
	CustomerService.create(customer)
		.then(result => {
			Dispatch.done(dispatch, CREATE, result);
		});
};

export const retrieve = entity => dispatch => {
	Dispatch.loading(dispatch, RETRIEVE);
	if (!!entity && !!entity.entityId) {
		CustomerService.retrieve(entity.entityId)
			.then(result => {
				Dispatch.done(dispatch, RETRIEVE, result);
			});

	} else {
		Dispatch.done(dispatch, RETRIEVE, { status: SUCCESS, result: {} });
	}
};

export const update = (customer, nextFunc) => dispatch => {
	Dispatch.loading(dispatch, UPDATE);
	PageActions.startLoading(dispatch)
	CustomerService.update(customer)
		.then(result => {
			Dispatch.done(dispatch, UPDATE, result);
			if (nextFunc) {
				nextFunc();
				//Dispatch.done(dispatch, PageActions.PAGE_LOADING, { status: SUCCESS, result: {} });
				PageActions.stopLoading(dispatch);
			}
		});
};

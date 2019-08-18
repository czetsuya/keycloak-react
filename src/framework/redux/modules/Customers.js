import Dispatch from '../Dispatch';
import CustomerService from '../../../api-services/ff-api/Customers';
import { SUCCESS } from '../../../models/Response';
import * as PageActions from './Page'

const LIST = 'customers/LIST';
const CREATE = 'customers/CREATE';
const RETRIEVE = 'customers/RETRIEVE';
const UPDATE = 'customers/UPDATE';
const DELETE = 'customers/DELETE';
const CLICK = 'customers/CLICK';

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
		case Dispatch.successAction(DELETE): {
			return {
				...state,
				list: [...state.list.filter((e, index, arr) => { return e.entityId !== action.payload.entityId })]
			};
		}
		case Dispatch.successAction(CLICK): {
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

export const create = (customer, nextFunc) => dispatch => {
	Dispatch.loading(dispatch, CREATE);
	CustomerService.create(customer)
		.then(result => {
			Dispatch.done(dispatch, CREATE, result);
			if (nextFunc) {
				nextFunc();
			}
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

export const remove = customerId => dispatch => {
	Dispatch.loading(dispatch, DELETE);
	CustomerService.remove(customerId)
		.then(result => {
			Dispatch.done(dispatch, DELETE, { status: SUCCESS, result: { entityId: customerId } });
		});
};

export const clickUserRole = () => dispatch => {
	console.log('click')
	CustomerService.accessByUserRole()
		.then(response => {
			Dispatch.done(dispatch, CLICK, { status: SUCCESS, response });
		})
}

export const clickAdminRole = () => dispatch => {
	console.log('click')
	CustomerService.accessByAdminRole()
		.then(response => {
			Dispatch.done(dispatch, CLICK, { status: SUCCESS, response });
		})
}

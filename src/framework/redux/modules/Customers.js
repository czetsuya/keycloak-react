import Dispatch from '../Dispatch';
import CustomerService from '../../../api-services/ff-api/Customers';
import { SUCCESS } from '../../../models/Response';

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
    case Dispatch.successAction(LIST): {
      return {
        ...state,
        list: [...action.data._embedded.customers],
      };
    }
    case Dispatch.successAction(RETRIEVE): {
      return {
        ...state,
        selected: { ...action.data },
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

export const retrieve = customer => dispatch => {
  Dispatch.loading(dispatch, RETRIEVE);
  if (!!customer && !!customer.id) {
    CustomerService.retrieve(customer)
      .then(result => {
        Dispatch.done(dispatch, RETRIEVE, result);
      });
  } else {
    Dispatch.done(dispatch, RETRIEVE, { status: SUCCESS, result: {} });
  }
};

export const update = customer => dispatch => {
  Dispatch.loading(dispatch, UPDATE);
  CustomerService.update(customer)
    .then(result => {
      Dispatch.done(dispatch, UPDATE, result);
    });
};

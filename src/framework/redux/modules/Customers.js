import Dispatch from '../Dispatch';
import CustomerService from '../../../api-services/ff-api/Customers';

const LIST = 'customers/LIST';
const RETRIEVE = 'customers/RETRIEVE';
/*
const CREATE = 'menu/CREATE';
const UPDATE = 'menu/UPDATE';
const DELETE = 'menu/DELETE';
*/

const initialState = {
  selected: {},
  customerList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Dispatch.successAction(LIST): {
      return {
        ...state,
        customerList: [...action.data._embedded.customers],
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

export const retrieve = customer => dispatch => {
  CustomerService.retrieve(customer)
    .then(result => {
      Dispatch.done(dispatch, RETRIEVE, customer);
    });
};

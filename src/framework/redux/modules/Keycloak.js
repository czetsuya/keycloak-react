import axios from 'axios';

const USER_LOGGED_IN = 'keycloak/LOGIN';
const USER_LOGGED_OUT = 'keycloak/LOGOUT';

export default function user(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      axios.defaults.headers.common.Authorization = `Bearer ${action.token}`;
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    case USER_LOGGED_OUT:
      axios.defaults.headers.common.Authorization = "";
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    default:
      return state;
  }
}

export const userLoggedIn = (loggedIn, token) => (
	  {
	    type: USER_LOGGED_IN,
	    isAuthenticated: loggedIn,
	    token
	  });

	export const userLoggedOut = () => ({
	    type: USER_LOGGED_OUT,
	    isAuthenticated: false
	  });
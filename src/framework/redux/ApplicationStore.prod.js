/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
import { createStore, compose, applyMiddleware } from 'redux'
import { persistCombineReducers } from 'redux-persist'
import localForage from 'localforage'
import thunk from 'redux-thunk'
// import api from '../middleware/api'
import promise from 'redux-promise-middleware'
import rootReducer from './Reducers'
import { crashReporter } from './Middlewares'

const middlewares = [thunk, promise, crashReporter]

const configureStore = preloadedState => {
	const store = createStore(
    	persistCombineReducers(
    		{
    			key: 'keycloak-react',
    			storage: localForage,
    			whitelist: ['authContext']
    		},
    		rootReducer,
    	),
        preloadedState,
        compose(applyMiddleware(...middlewares))
    );
	
	return store;
}

export default configureStore
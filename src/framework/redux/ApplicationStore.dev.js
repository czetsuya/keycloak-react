/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
import { createStore, applyMiddleware } from 'redux'
import { persistCombineReducers } from 'redux-persist'
import localForage from 'localforage'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
// import api from '../middleware/api'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducers'
import { crashReporter } from './Middlewares'
import { monitorReducerEnhancer } from './Enhancers'

const middlewares = [thunk, promise, crashReporter, createLogger()]

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
        composeWithDevTools(
            applyMiddleware(...middlewares),
            monitorReducerEnhancer
        )
    )

    return store
}

export default configureStore
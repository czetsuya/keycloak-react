/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
import { createStore, applyMiddleware, compose } from 'redux'
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

const isProductionMode = process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production';

let middleware = null

const middlewares = [thunk, promise, crashReporter]

if (isProductionMode) {
	middleware = compose(applyMiddleware(...middlewares))

} else {
	middleware = composeWithDevTools(
		applyMiddleware(...middlewares, createLogger()),
		monitorReducerEnhancer
	)
}

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
		middleware
	)

	return store
}

export default configureStore()
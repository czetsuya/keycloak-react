import { applyMiddleware, createStore, compose } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import localForage from 'localforage';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './Reducers';

const isProductionMode = process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production';

let middleware = null;

const middlewares = [thunk, promise];

if (isProductionMode) {
	middleware = compose(applyMiddleware(...middlewares));
} else {
	// eslint-disable-next-line no-underscore-dangle
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	middleware = composeEnhancers(applyMiddleware(...middlewares));
}

const persistedReducers = persistCombineReducers(
	{
		key: 'ultima-react',
		storage: localForage,
		whitelist: ['authorization']
	},
	reducers
);

const ApplicationStore = createStore(persistedReducers, undefined, middleware);
export default ApplicationStore;

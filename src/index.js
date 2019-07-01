import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import ScrollToTop from './ScrollToTop';
import AppWrapper from './AppWrapper';

ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<ScrollToTop>
			<AppWrapper />
		</ScrollToTop>
	</BrowserRouter>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

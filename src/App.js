import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Documentation from './components/Documentation';
import CustomerList from './pages/secure/Customers/CustomerList';
import Customer from './pages/secure/Customers/Customer';
import SecurityContext from './pages/routing/SecurityContext';
import LandingPageSwitcher from './pages/routing/LandingPageSwitcher.js';
import * as AuthorizationActions from './framework/redux/modules/Authorization';
import { ProgressSpinner } from 'primereact/progressspinner';
import NotFound from './components/NotFound'
import Error401 from './components/Error401'
import Error500 from './components/Error500'

class App extends Component {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		authorization: PropTypes.shape({
			auth: PropTypes.object,
			token: PropTypes.string,
			user: PropTypes.shape({
				username: PropTypes.string,
			}),
		}).isRequired,
	};

	setAuth = auth => {
		this.props.dispatch(AuthorizationActions.initialize(auth));
	};

	render = () => {
		const { auth } = this.props.authorization;
		return (
			<SecurityContext.Provider value={{ ...auth, setAuth: this.setAuth }}>
				<Suspense fallback={<ProgressSpinner />}>
					<I18nextProvider i18n={i18next}>
						<Switch>
							<Route exact path="/" component={LandingPageSwitcher} />
							{/* Public Routes */}
							<Route path="/error-401" component={Error401} />
							<Route path="/error-500" component={Error500} />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/documentation" component={Documentation} />
							{/* End Public Routes */}
							{/* Secure Routes */}
							<Route path="/customers/:type/:id" component={Customer} />
							<Route path="/customers/:type" component={Customer} />
							<Route path="/customers" component={CustomerList} />
							{/* End Secure Routes */}

							<Route path="/not-found" component={NotFound} />
							<Route path="*" render={() => <Redirect to="/not-found" />} />
						</Switch>
					</I18nextProvider>
				</Suspense>
			</SecurityContext.Provider>
		);
	};
}

export default connect(state => ({
	authorization: state.authorization,
}))(App);

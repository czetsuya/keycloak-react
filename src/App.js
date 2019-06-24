import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppFooter} from './AppFooter';
import {AppMenu} from './AppMenu';
import {AppInlineProfile} from './AppInlineProfile';
import Dashboard from './components/Dashboard';
import {FormsDemo} from './components/FormsDemo';
import {SampleDemo} from './components/SampleDemo';
import {DataDemo} from './components/DataDemo';
import {PanelsDemo} from './components/PanelsDemo';
import {OverlaysDemo} from './components/OverlaysDemo';
import {MenusDemo} from './components/MenusDemo';
import {MessagesDemo} from './components/MessagesDemo';
import {ChartsDemo} from './components/ChartsDemo';
import {MiscDemo} from './components/MiscDemo';
import {EmptyPage} from './components/EmptyPage';
import Documentation from "./components/Documentation";
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import './App.css';
import CustomerList from './pages/secure/Customers/CustomerList';
import Customer from './pages/secure/Customers/Customer';
import SecurityContext from './pages/routing/SecurityContext';
import LandingPageSwitcher from './pages/routing/LandingPageSwitcher.js';
import * as AuthorizationActions from './framework/redux/modules/Authorization';
import ScrollToTop from './ScrollToTop'
import { PrivateRoute } from "react-router-keycloak";
import * as KeycloakActions from './framework/redux/modules/Keycloak'
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
	      
	        <I18nextProvider i18n={i18next}>
	            <Switch>
	              <Route exact path="/" component={LandingPageSwitcher} />
	              {/* Public Routes */}
	              {/* End Public Routes */}
	              {/* Secure Routes */}
	              <Route path="/dashboard" component={Dashboard} />
	              <PrivateRoute path="/customers" component={Customer} onSuccess={this.props.userLoggedIn} />
	              <Route path="/customers/:type/:id" component={Customer} />
	              <Route path="/customers/:type" component={Customer} />
	              <Route path="/customers" component={CustomerList} />
	              <Route path="/documentation" component={Documentation} />
	              {/* End Secure Routes */}
	              <Route path="*" render={() => <Redirect to="/not-found" />} />
	            </Switch>
	        </I18nextProvider>
	        
	    );
	  };
	}
	  
	  const mapDispatchToProps = (dispatch) => ({
		    userLoggedIn: (token) => dispatch(KeycloakActions.userLoggedIn(token)),
		    userLoggedOut: () => dispatch(KeycloakActions.userLoggedOut())
		  });

	  export default connect(state => ({
		  authorization: state.authorization,
		  
		}),
		mapDispatchToProps)(App);

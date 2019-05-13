import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import SecurityContext from './pages/routing/SecurityContext';

import 'fullcalendar/dist/fullcalendar.css';
import './ripple.js';

import LandingPageSwitcher from './pages/routing/LandingPageSwitcher.js';

import Access from './pages/public/Access';
import Error from './pages/public/Error';
import Login from './pages/public/Login';
import NotFound from './pages/public/NotFound';

import Dashboard from './pages/secure/Dashboard';
import CustomerList from './pages/secure/Customers/CustomerList';
import FormsDemo from './pages/secure/FormsDemo';
import SampleDemo from './pages/secure/SampleDemo';
import DataDemo from './pages/secure/DataDemo';
import PanelsDemo from './pages/secure/PanelsDemo';
import OverlaysDemo from './pages/secure/OverlaysDemo';
import MenusDemo from './pages/secure/MenusDemo';
import MessagesDemo from './pages/secure/MessagesDemo';
import ChartsDemo from './pages/secure/ChartsDemo';
import MiscDemo from './pages/secure/MiscDemo';
import EmptyPage from './pages/secure/EmptyPage';
import UtilsDemo from './pages/secure/UtilsDemo';
import Documentation from './pages/secure/Documentation';

import * as AuthorizationActions from './framework/redux/modules/Authorization';

class App extends React.Component {
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
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPageSwitcher} />
              {/* Public Routes */}
              <Route path="/access" component={Access} />
              <Route path="/error" component={Error} />
              <Route path="/login" component={Login} />
              <Route path="/not-found" component={NotFound} />
              {/* End Public Routes */}
              {/* Secure Routes */}
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/customers" component={CustomerList} />
              <Route path="/forms" component={FormsDemo} />
              <Route path="/sample" component={SampleDemo} />
              <Route path="/data" component={DataDemo} />
              <Route path="/panels" component={PanelsDemo} />
              <Route path="/overlays" component={OverlaysDemo} />
              <Route path="/menus" component={MenusDemo} />
              <Route path="/messages" component={MessagesDemo} />
              <Route path="/charts" component={ChartsDemo} />
              <Route path="/misc" component={MiscDemo} />
              <Route path="/empty" component={EmptyPage} />
              <Route path="/utils" component={UtilsDemo} />
              <Route path="/documentation" component={Documentation} />
              {/* End Secure Routes */}
              <Route path="*" render={() => <Redirect to="/not-found" />} />
            </Switch>
          </BrowserRouter>
        </I18nextProvider>
      </SecurityContext.Provider>
    );
  };
}

export default connect(state => ({
  authorization: state.authorization,
}))(App);

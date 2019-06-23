import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as AuthorizationActions from '../../framework/redux/modules/Authorization';


class AppBreadcrumb extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  logout = () => {
    const { dispatch, history } = this.props;
    history.push('/');
    dispatch(AuthorizationActions.logout({ now: true }));
  };

  render() {
    const { location } = this.props;
    const pathname = location.pathname.split(/[?&]/)[0];

    return (
      <div className="layout-breadcrumb">
        <ul>
          <li>
            <button className="p-link">
              <i className="material-icons">home</i>
            </button>
          </li>
          <li>{pathname}</li>
        </ul>

        <div className="layout-breadcrumb-options">
          <button className="p-link" title="Backup">
            <i className="material-icons">backup</i>
          </button>
          <button className="p-link" title="Bookmark">
            <i className="material-icons">bookmark</i>
          </button>
          <button className="p-link" title="Logout" onClick={this.logout}>
            <i className="material-icons">power_settings_new</i>
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(AppBreadcrumb));

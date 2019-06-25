import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as AuthorizationActions from './framework/redux/modules/Authorization';

class AppInlineProfile extends Component {

	constructor() {
		super();
		this.state = {
			expanded: false
		};
		this.onClick = this.onClick.bind(this);
	}

	logout = () => {
		const { dispatch, history } = this.props;
		history.push('/');
		dispatch(AuthorizationActions.logout({ now: true }));
	};

	onClick(event) {
		this.setState({ expanded: !this.state.expanded });
		event.preventDefault();
	}

	render() {
		return (
			<div className="profile">
				<div>
					<img src="assets/layout/images/profile.png" alt="" />
				</div>
				<button className="p-link profile-link" onClick={this.onClick}>
					<span className="username">Claire Williams</span>
					<i className="pi pi-fw pi-cog" />
				</button>
				<ul className={classNames({ 'profile-expanded': this.state.expanded })}>
					<li><button className="p-link"><i className="pi pi-fw pi-user" /><span>Account</span></button></li>
					<li><button className="p-link"><i className="pi pi-fw pi-inbox" /><span>Notifications</span><span className="menuitem-badge">2</span></button></li>
					<li><button className="p-link" onClick={this.logout}><i className="pi pi-fw pi-power-off" /><span>Logout</span></button></li>
				</ul>
			</div>
		);
	}
}

export default connect()(withRouter(AppInlineProfile))
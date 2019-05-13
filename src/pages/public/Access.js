import React, {Component} from 'react';
import {Button} from 'primereact/button';

export default class Access extends Component {

	render() {
		return <div className="exception-body accessdenied-page">
			<div className="exception-type">
				<img src="assets/layout/images/401.svg" alt="ultima"/>
			</div>

			<div className="card exception-panel">
				<i className="material-icons">&#xE32A;</i>
				<h1>Access Denied</h1>
				<div className="exception-detail">You are not authorized to access this resource.</div>
				<Button label="Homepage" onClick={() => {window.location = "/#"}} />
			</div>
		</div>
	}
}
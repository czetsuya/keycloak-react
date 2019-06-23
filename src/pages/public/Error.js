import React, {Component} from 'react';
import {Button} from 'primereact/button';

export default class Error extends Component {

	render() {
		return <div className="exception-body  error-page">
			<div className="exception-type">
				<img src="assets/layout/images/error.svg" alt="ultima"/>
			</div>

			<div className="card exception-panel">
				<i className="material-icons">&#xE000;</i>
				<h1>Exception Occured</h1>
				<div className="exception-detail">Please contact system administrator</div>
				<Button label="Homepage" onClick={() => {window.location = "/#"}} />
			</div>
		</div>
	}
}
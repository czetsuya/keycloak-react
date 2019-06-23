import React, {Component} from 'react';
import {Button} from 'primereact/button';

export default class NotFound extends Component {

	render() {
		return <div className="exception-body notfound-page">
			<div className="exception-type">
				<img src="assets/layout/images/404.svg" alt="ultima"/>
			</div>

			<div className="card exception-panel">
				<i className="material-icons">&#xE001;</i>
				<h1>Page Not Found</h1>
				<div className="exception-detail">The resource you are looking for does not exist.</div>
				<Button label="Homepage" onClick={() => {window.location = "/#"}} />
			</div>
		</div>
	}
}
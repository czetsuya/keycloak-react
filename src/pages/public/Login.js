import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export default class Login extends Component {

	render() {
		return <div className="login-body">

			<div className="login-type">


				<div className="card login-panel p-fluid">
					<div className="p-grid">
						<div className="p-col-12">
							<img src="assets/layout/images/logo-ultima.svg" alt="ultima"/>
						</div>
						<div className="p-col-12">
						<span className="md-inputfield">
							<InputText/>
							<label>Username</label>
						</span>
						</div>
						<div className="p-col-12">
						<span className="md-inputfield">
							<InputText type="password"/>
							<label>Password</label>
						</span>
						</div>
						<div className="p-col-12">
							<Button label="Sign In" icon="pi-md-person" onClick={() => {window.location = "/#"}} />
							<Button label="Forgot Password" icon="pi-md-help" className="pink-btn"/>
						</div>
					</div>
				</div>
			</div>


			<div className="login-footer">PrimeReact Ultima</div>
		</div>
	}
}
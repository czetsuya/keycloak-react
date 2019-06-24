import React, { connect, Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ApplicationStore from './framework/redux/ApplicationStore';
import App from './App';
import KeycloakProvider, {configureKeycloak} from "react-router-keycloak"
import * as KeycloakActions from './framework/redux/modules/Keycloak'
configureKeycloak('http://localhost:8081/auth', 'primereact-app', 'primereact-client');

class AppWrapper extends Component {
	constructor(props) {
		super(props);
		this.persistor = persistStore(ApplicationStore);
	}

	render() {
		return (
			<Provider store={ApplicationStore}>
				<PersistGate loading={null} persistor={this.persistor}>
				<KeycloakProvider loginPath="http://localhost:8081/auth/realms/primereact-app/account" logoutPath="LOGOUT_PATH" onRefresh="FUNCTION_TO_GET_REFRESHED_TOKEN">
					<App />
					</KeycloakProvider>
				</PersistGate>
			</Provider>
		);
	}
}

export default AppWrapper

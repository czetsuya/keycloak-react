import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import SecurityContext from './SecurityContext';
import BusyLoader from '../../framework/component/BusyLoader'

export const withSecurity = SecureComponent => props => {
	const { authContext, setAuthContext } = useContext(SecurityContext);
	const { keycloak, token } = authContext || {}

	const keycloakAuthenticated = keycloak ? keycloak.authenticated : false

	useEffect(() => {
		if (!token) {
			let authenticate = new Promise((resolve, reject) => {
				const keycloakInstance = Keycloak('/keycloak.json');
				keycloakInstance
					.init({ onLoad: 'login-required' })
					.success(authenticated => {
						resolve(keycloakInstance);
					})
					.error(e => {
						console.log("Authentication failed: " + e)
					});
			});

			(async () => {
				const keycloakInstance = await authenticate;
				setAuthContext({ keycloak: keycloakInstance });
			})();
		}
	}, [token, setAuthContext]);

	if (token) {
		if (keycloakAuthenticated) {
			return <SecureComponent {...props} />;

		} else {
			//try to refresh?
			return <Redirect to='/error-401' />;
		}
	}

	// return <Redirect to='/error-500' />;
	return <BusyLoader isLoading={true}></BusyLoader>;
};

import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import SecurityContext from './SecurityContext';

export const withSecurity = SecureComponent => props => {
	const { keycloak, setAuth } = useContext(SecurityContext);
	const { token } = keycloak || {};

	const keycloakAuthenticated = keycloak ? keycloak.authenticated : false

	useEffect(() => {
		if (!token) {
			let authenticate = new Promise((resolve, reject) => {
				const keycloakInstance = Keycloak('/keycloak.json');
				keycloakInstance
					.init({ onLoad: 'login-required' })
					.success(authenticated => {
						resolve({ keycloak: keycloakInstance, keycloakAuthenticated: authenticated });
					})
					.error(e => {
						console.log("Authentication failed: " + e)
					});
			});

			(async () => {
				const keycloakInstance = await authenticate;
				setAuth(keycloakInstance);
			})();
		}
	}, [token, setAuth]);

	if (token) {
		if (keycloakAuthenticated) {
			return <SecureComponent {...props} />;

		} else {
			return <Redirect to='/error-401' />;
		}
	}

	return <Redirect to='/error-500' />;
	// return <div>hello</div>
};

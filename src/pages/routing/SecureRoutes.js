import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import SecurityContext from './SecurityContext';
import { ProgressSpinner } from 'primereact/progressspinner';

export const withSecurity = SecureComponent => props => {
	const { authContext, setAuthContext } = useContext(SecurityContext);
	const { keycloak, token } = authContext || {}

	console.log('withSecurity')
	console.log(keycloak)

	const keycloakAuthenticated = keycloak ? keycloak.authenticated : false

	useEffect(() => {
		console.log('useEffect ' + token)
		if (!token) {
			let authenticate = new Promise((resolve, reject) => {
				const keycloakInstance = Keycloak('/keycloak.json');
				keycloakInstance
					.init({ onLoad: 'login-required' })
					.success(authenticated => {
						console.log("auth.ok")
						resolve(keycloakInstance);
					})
					.error(e => {
						console.log("Authentication failed: " + e)
					});
			});

			(async () => {
				const keycloakInstance = await authenticate;
				console.log('kc.instance=' + keycloakInstance.authenticated)
				console.log({ keycloak: keycloakInstance })
				setAuthContext({ keycloak: keycloakInstance });
			})();
		}
	}, [token, setAuthContext]);

	if (token) {
		console.log('isToken.valid')
		if (keycloakAuthenticated) {
			console.log('token.auth.ok')
			return <SecureComponent {...props} />;

		} else {
			console.log('token.auth.ko')
			//try to refresh?
			return <Redirect to='/error-401' />;
		}
	}

	// return <Redirect to='/error-500' />;
	return <ProgressSpinner></ProgressSpinner>
};

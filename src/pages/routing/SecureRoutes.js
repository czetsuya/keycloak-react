import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import SecurityContext from './SecurityContext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { EmptyPage } from '../../components/EmptyPage'

export const withSecurity = SecureComponent => props => {
	const { keycloak, authenticated, setAuth } = useContext(SecurityContext);
	const { token } = keycloak || {};
	
	useEffect(() => {
		if (!token) {
			let authenticate = new Promise((resolve, reject) => {
				const keycloakInstance = Keycloak('/keycloak.json');
				keycloakInstance
					.init({ onLoad: 'login-required' })
					.success(authenticated => {
						resolve({ keycloak: keycloakInstance, authenticated });
					})
					.error(e => {
						console.log(props)
					});
			});

			(async () => {
				const keycloakInstance = await authenticate;
				setAuth(keycloakInstance);
			})();
		}
	}, [token, setAuth]);

	if (token) {
		if (authenticated) {
			return <SecureComponent {...props} />;

		} else {
			return <Redirect to='/access' />;
		}
	}

	return <EmptyPage></EmptyPage>;
};

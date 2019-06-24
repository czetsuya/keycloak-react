import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import SecurityContext from './SecurityContext';

const authenticate = new Promise((resolve, reject) => {
  const keycloakInstance = Keycloak('/keycloak.json');
  keycloakInstance
    .init({ onLoad: 'login-required' })
    .success(authenticated => {
      resolve({ keycloak: keycloakInstance, authenticated });
    })
    .error(e => reject(e));
});

export const withSecurity = SecureComponent => props => {
  const { keycloak, authenticated, setAuth } = useContext(SecurityContext);
  const { token } = keycloak || {};

  useEffect(() => {
    (async () => {
      if (!token) {
        const keycloakInstance = await authenticate;
        setAuth(keycloakInstance);
      }
    })();
  }, [token, setAuth]);

  if (token) {
    if (authenticated) {
      return <SecureComponent {...props} />;
    } else {
      return <Redirect to='/access' />;
    }
  }
  return <div>Initializing Keycloak...</div>;
};

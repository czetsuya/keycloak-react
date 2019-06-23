import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import SecurityContext from './SecurityContext';

export const withSecurity = SecureComponent => props => {
  const { keycloak, authenticated, setAuth } = useContext(SecurityContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    () => {
      (async () => {
        const authenticate = new Promise((resolve, reject) => {
          const keycloak = Keycloak('/keycloak.json');
          keycloak
            .init({ onLoad: 'login-required' })
            .success(authenticated => {
              resolve({ keycloak, authenticated });
            })
            .error(e => reject(e));
        });
        const keycloak = await authenticate;
        setAuth(keycloak);
      })();
    },
    [setAuth],
  );

  if (keycloak) {
    if (authenticated) {
      return <SecureComponent {...props} />;
    } else {
      return <Redirect to='/access' />;
    }
  }
  return <div>Initializing Keycloak...</div>;
};

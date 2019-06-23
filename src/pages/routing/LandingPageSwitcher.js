import React, { useContext } from 'react';
import SecureContext from './SecurityContext';
import Landing from '../public/Landing';
import Dashboard from '../secure/Dashboard';

export default () => {
  const context = useContext(SecureContext);
  const { authenticated } = context;

	if (authenticated) {
    return <Dashboard />;
  }
  return <Landing />;
};

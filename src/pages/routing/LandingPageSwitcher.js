import React, { useContext } from 'react';
import SecureContext from './SecurityContext';
import Dashboard from '../../components/Dashboard';

export default () => {
  const context = useContext(SecureContext);
  const { authenticated } = context;

	if (authenticated) {
    return <Dashboard />;
  }
  return <Dashboard />;
};

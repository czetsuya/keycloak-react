import React, { useContext } from 'react';
import SecureContext from './SecurityContext';
import Dashboard from '../../components/Dashboard';
import CustomerList from '../secure/Customers/CustomerList'

export default () => {
	const { keycloak } = useContext(SecureContext);

	if (keycloak && keycloak.authenticated) {
		return <CustomerList />;
	}

	return <Dashboard />;
};

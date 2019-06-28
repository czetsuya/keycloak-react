import React, { useContext } from 'react';
import SecurityContext from './SecurityContext';
import Dashboard from '../../components/Dashboard';
import CustomerList from '../secure/Customers/CustomerList'

export default () => {
	const { authContext } = useContext(SecurityContext) || {}
	const { keycloak } = authContext || {}
	console.log("landingPage " + JSON.stringify(authContext))

	if (keycloak && keycloak.authenticated) {
		return <CustomerList />;
	}

	return <Dashboard />;
};

import React, { useContext } from 'react';
import SecureContext from './SecurityContext';
import Dashboard from '../../components/Dashboard';
import CustomerList from '../secure/Customers/CustomerList'

export default () => {
	const { keycloak } = useContext(SecureContext);

	console.log("landingPage")
	console.log(keycloak)
	
	if (keycloak && keycloak.authenticated) {
		return <CustomerList keycloak />;
	}

	return <Dashboard />;
};

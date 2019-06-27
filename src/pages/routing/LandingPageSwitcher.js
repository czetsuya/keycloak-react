import React, { useContext } from 'react';
import SecurityContext from './SecurityContext';
import Dashboard from '../../components/Dashboard';
import CustomerList from '../secure/Customers/CustomerList'

export default () => {
	const { authContext } = useContext(SecurityContext);

	console.log("landingPage")
	console.log(authContext)
	
	// if (keycloak && keycloak.authenticated) {
	// 	return <CustomerList keycloak />;
	// }

	return <Dashboard />;
};

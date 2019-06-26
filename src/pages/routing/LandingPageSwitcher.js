import React, { useContext } from 'react';
import SecureContext from './SecurityContext';
import Dashboard from '../../components/Dashboard';
import CustomerList from '../secure/Customers/CustomerList'

export default () => {
	const { authenticated } = useContext(SecureContext);

	if (authenticated) {
		return <CustomerList />;
	}
	
	return <Dashboard />;
};

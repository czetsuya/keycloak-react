import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withSecurity } from '../../routing/SecureRoutes';
import * as CustomerActions from '../../../framework/redux/modules/Customers';
import { withSecureLayout } from '../../layout/SecureLayout';

const CustomerList = ({ dispatch, customers }) => {
  useEffect(() => {
    dispatch(CustomerActions.list());
  }, []);

  return (
    <div className="p-grid">
      <div className="p-col-12">
        <div className="card">
          <ul>
            {customers.customerList.map(customer => (
              <li key={customer.entityId}>{customer.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default connect(state => ({
  customers: state.customers,
}))(withSecurity(withSecureLayout(CustomerList)));

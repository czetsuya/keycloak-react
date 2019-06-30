import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { withSecurity } from '../../routing/SecureRoutes';
import { withSecureLayout } from '../../layout/SecureLayout';
import * as CustomerActions from '../../../framework/redux/modules/Customers';

const styles = {
	actionsColumn: { textAlign: 'center', width: '8em' },
	viewButton: { marginRight: '.5em' },
};

const CustomerList = ({ dispatch, customers, history }) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		dispatch(CustomerActions.list());
	}, [dispatch]);

	const viewCustomer = customer => () => {
		history.push(`/customers/view/${customer.entityId}`);
	};

	const editCustomer = customer => () => {
		history.push(`/customers/edit/${customer.entityId}`);
	};

	const newCustomer = () => {
		history.push('/customers/new');
	};

	const actionButtons = (rowData) => {
		return (
			<div>
				<Button type="button" icon="pi pi-search" style={styles.viewButton} onClick={viewCustomer(rowData)} />
				<Button type="button" icon="pi pi-pencil" onClick={editCustomer(rowData)} />
			</div>
		);
	};

	return (
		<div className="p-grid">
			<div className="p-col-12">
				<div className="card card-w-title">
					<h1>DataTable</h1>
					<h4><Button type="button" label="Add Customer" icon="pi pi-plus" onClick={newCustomer} /></h4>
					<DataTable
						value={customers.list}
						rows={5}
						paginatorPosition="both"
						paginator
						responsive
					>
						<Column field="id" header="ID" sortable={true} />
						<Column field="name" header="Name" sortable={true} />
						<Column field="age" header="Age" sortable={true} />
						<Column field="email" header="Email" sortable={true} />
						<Column body={actionButtons} style={styles.actionsColumn} />
					</DataTable>
				</div>
			</div>
		</div>
	);
};

export default connect(state => ({
	customers: state.customers,
	page: state.page
}))(withSecurity(withSecureLayout(CustomerList)));
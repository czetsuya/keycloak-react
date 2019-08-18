import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { withSecurity } from '../../routing/SecureRoutes';
import { withSecureLayout } from '../../layout/SecureLayout';
import * as CustomerActions from '../../../framework/redux/modules/Customers';
import Locations from '../../../Locations'

const styles = {
	actionsColumn: { textAlign: 'center', width: '10em' },
	viewButton: { marginRight: '.3em' },
};

const CustomerList = ({ dispatch, customers, history }) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		dispatch(CustomerActions.list());
	}, [dispatch]);

	const viewCustomer = entityId => () => {
		history.push(Locations.CustomerEdit.toUrl({ type: 'view', entityId: entityId }));
	};

	const editCustomer = entityId => () => {
		history.push(Locations.CustomerEdit.toUrl({ type: 'edit', entityId: entityId }));
	};

	const deleteCustomer = entityId => () => {
		dispatch(CustomerActions.remove(entityId))
	}

	const newCustomer = () => {
		history.push(Locations.CustomerNew.toUrl({ type: 'new' }));
	};

	const clickUserRole = () => {
		dispatch(CustomerActions.clickUserRole())
	}

	const clickAdminRole = () => {
		dispatch(CustomerActions.clickAdminRole())
	}

	const actionButtons = (rowData) => {
		return (
			<div>
				<Button type="button" tooltip="View" icon="pi pi-search" style={styles.viewButton} onClick={viewCustomer(rowData.entityId)} />
				<Button type="button" tooltip="Edit" icon="pi pi-pencil" style={styles.viewButton} onClick={editCustomer(rowData.entityId)} />
				<Button type="button" tooltip="Delete" icon="pi pi-trash" onClick={deleteCustomer(rowData.entityId)} />
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
						autoLayout
					>
						<Column field="entityId" header="ID" sortable={true} />
						<Column field="name" header="Name" sortable={true} />
						<Column field="age" header="Age" sortable={true} />
						<Column field="email" header="Email" sortable={true} />
						<Column body={actionButtons} style={styles.actionsColumn} />
					</DataTable>
				</div>
			</div>
			<div>
				<h2>Role Base Actions</h2>
				<Button type="button" label="Role User" onClick={clickUserRole}></Button>&nbsp;
				<Button type="button" label="Role Admin" onClick={clickAdminRole}></Button>
			</div>
		</div>
	);
};

export default connect(state => ({
	customers: state.customers,
	page: state.page
}))(withSecurity(withSecureLayout(CustomerList)));
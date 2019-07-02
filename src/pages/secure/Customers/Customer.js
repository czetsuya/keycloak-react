import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { withSecurity } from '../../routing/SecureRoutes';
import { withSecureLayout } from '../../layout/SecureLayout';
import * as CustomerActions from '../../../framework/redux/modules/Customers'
import Locations from '../../../Locations'

const styles = {
	cancelButton: { marginRight: '.25em' },
};

const Customer = ({ dispatch, customer, history, navigation, match: { params: { type, entityId = null } } }) => {

	useEffect(() => {
		dispatch(CustomerActions.retrieve({ entityId }));
	}, [dispatch, entityId, type]);

	const close = () => {
		dispatch(CustomerActions.retrieve());
		history.push(Locations.CustomerList.toUrl());
	};

	const save = (customer) => {
		if (type === 'edit') {
			dispatch(CustomerActions.update(customer, close));
		}
		if (type === 'new') {
			dispatch(CustomerActions.create(customer, close));
		}
	};

	return (
		<div className="p-grid">
			<div className="p-col-12">
				<div className="card">
					<Formik
						enableReinitialize
						initialValues={customer}
						onReset={close}
						onSubmit={save}
						render={({ handleReset, handleSubmit }) => (
							<Fragment>
								<h1>{`Customer${!!entityId ? ` - ${entityId}` : ' - New'}`}</h1>
								<div className="p-grid">
									<div className="p-col-12 p-md-1">
										<label htmlFor="name">Name</label>
									</div>
									<div className="p-col-12 p-md-5">
										<Field
											name="name"
											render={({ field }) => (
												<InputText {...field} id="name" disabled={type === 'view'} value={field.value || ''} />
											)}
										/>
									</div>
									<div className="p-col-12 p-md-1">
										<label htmlFor="age">Age</label>
									</div>
									<div className="p-col-12 p-md-5">
										<Field
											name="age"
											render={({ field }) => (
												<InputText {...field} id="age" type="number" min={1} disabled={type === 'view'} value={field.value || 16} />
											)}
										/>
									</div>
									<div className="p-col-12 p-md-1">
										<label htmlFor="email">Email</label>
									</div>
									<div className="p-col-12 p-md-5">
										<Field
											name="email"
											render={({ field }) => (
												<InputText {...field} id="email" type="email" min={1} disabled={type === 'view'} value={field.value || ''} />
											)}
										/>
									</div>
								</div>
								<Button type="submit"
									onClick={handleReset}
									label={type === 'view' ? 'Close' : 'Cancel'}
									className="p-button-danger"
									style={styles.cancelButton}
								/>
								{type !== 'view' &&
									<Button type="submit" onClick={handleSubmit} label="Save" className="p-button-success" />
								}
							</Fragment>
						)}
					/>
				</div>
			</div>
		</div>
	);
};

Customer.propTypes = {
	customer: PropTypes.shape({
		entityId: PropTypes.number,
		name: PropTypes.string,
		age: PropTypes.number,
		email: PropTypes.string,
	}).isRequired,
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
			type: PropTypes.oneOf(['new', 'edit', 'view']).isRequired,
		}).isRequired,
	}).isRequired,
};

Customer.defaultProps = {
	customer: {},
};

export default connect(state => ({
	customer: state.customers.selected,
	page: state.page
}))(withSecurity(withSecureLayout(Customer)));

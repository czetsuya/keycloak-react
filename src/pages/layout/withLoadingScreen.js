import React from 'react'
import { connect } from 'react-redux'
import { ProgressSpinner } from 'primereact/progressspinner';

const LoadingScreen = ({ WrappedComponent, page, ...componentProps }) => {

	const { isLoading } = page || {};

	return (
		<>
			<div class="busy-loader" style={{ display: isLoading ? "block" : "none" }}><ProgressSpinner /></div>
			<WrappedComponent {...componentProps} />
		</>
	);
};

const ConnectedLayout = connect()(LoadingScreen);

export const withLoadingScreen = WrappedComponent => props => {
	return (<ConnectedLayout {...props} WrappedComponent={WrappedComponent} />)
}
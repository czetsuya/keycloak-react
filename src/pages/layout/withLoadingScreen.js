import React from 'react'
import { connect } from 'react-redux'
import BusyLoader from '../../framework/component/BusyLoader'

const LoadingScreen = ({ WrappedComponent, page, ...componentProps }) => {

	const { isLoading } = page || {};

	return (
		<>
			<BusyLoader isLoading={isLoading}></BusyLoader>
			<WrappedComponent {...componentProps} />
		</>
	);
};

const ConnectedLayout = connect()(LoadingScreen);

export const withLoadingScreen = WrappedComponent => props => {
	return (<ConnectedLayout {...props} WrappedComponent={WrappedComponent} />)
}
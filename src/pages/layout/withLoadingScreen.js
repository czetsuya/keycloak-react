import React from 'react'
import { connect } from 'react-redux'

const LoadingScreen = ({ WrappedComponent, page, ...componentProps }) => {

	const { isLoading } = page || {};

	if (isLoading) {
		return <div>Hello</div>;
	}

	return <WrappedComponent {...componentProps} />;
};

const ConnectedLayout = connect()(LoadingScreen);

export const withLoadingScreen = WrappedComponent => props => {
	return (<ConnectedLayout {...props} WrappedComponent={WrappedComponent} />)
}
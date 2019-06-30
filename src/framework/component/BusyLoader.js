import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';

const BusyLoader = ({ isLoading = false }) => {



	return (
		<div className="busy-loader" style={{ display: isLoading ? "block" : "none" }}><ProgressSpinner /></div>
	);
}

export default BusyLoader
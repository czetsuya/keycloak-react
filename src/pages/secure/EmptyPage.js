import React from 'react';
import { withSecurity } from '../routing/SecureRoutes';
import { withSecureLayout } from '../layout/SecureLayout';

const EmptyPage = (/* props */) => {
	// const [state, setState] = useState(initialState);
	return (
		<div className="p-grid">
			<div className="p-col-12">
				<div className="card">
					<h1>Empty Page</h1>
					<p>Use this page to start from scratch and place your custom content.</p>
				</div>
			</div>
		</div>
	);
};

export default withSecurity(withSecureLayout(EmptyPage));

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div class="center">
				<h1>React Security with Keycloak</h1>
				<Link to="/customers">Customers</Link>
			</div>
		)
	}
}

export default Home
import React from 'react';
import NavLink from './NavLink';
// import { isLoggedIn, getUserName } from './functions';
import { isLoggedIn } from './functions';

export class Navbar extends React.Component {

	handleLogout = () => {
		localStorage.removeItem('token');
		window.location.href = "/";
	}

	render() {
		// const userName = ( getUserName() ) ? getUserName() : '';

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

			  <div className="navbar-collapse" id="navbarColor02">
			    <ul className="navbar-nav" style={{width: '100%'}}>
						<li className="nav-item mr-auto">
							<strong>
								<NavLink to="/">React with WP</NavLink>
							</strong>
						</li>
						<li className="nav-item">
							<NavLink to="/">Home</NavLink>
						</li>
						{ isLoggedIn() ? (
							<React.Fragment>
								<li className="nav-item">
									<NavLink to={ `/dashboard` }>Dashboard</NavLink>
								</li>
								<li className="nav-item">
									<button onClick={ this.handleLogout } className="btn btn-secondary ml-3">Logout</button>
								</li>
							</React.Fragment>
						) : (
							<li className="nav-item">
								<NavLink to="/login">Login</NavLink>
							</li>
						) }
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Navbar
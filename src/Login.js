import React, { Component } from 'react';
import User from './img/user.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Login extends Component  {
  render (){ return (
		<div className="App-login">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Nav className="mr-auto">
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown" >
								<NavDropdown.Item href="#action/3.1">Create Account</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
							</NavDropdown>
					</Nav>

					<Nav className="ml-auto">
						<NavDropdown  id="collasible-nav-dropdown" className="navbar-toggler-icon">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						</NavDropdown>
					</Nav>
			
			</Navbar>
    </div>
		);
  }
}
export default Login;
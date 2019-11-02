import React, { Component } from 'react';
import User from './img/user.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Item from 'react-bootstrap/NavItem';


class Login extends Component  {
  render (){ return (
		<Router>
		<div className="App-login">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Nav className="mr-auto">
							<NavDropdown title='User' id="collasible-nav-dropdown" >
							<Item href="#action/3.1">	 <Link to="/login">Login</Link></Item> 
								<Item href="#action/3.2">Login</Item>
							</NavDropdown>
					</Nav>

					<Nav className="ml-auto">
						<NavDropdown  id="collasible-nav-dropdown" className="navbar-toggler-icon">
								<Item href="#action/3.1">Action</Item>
								<Item href="#action/3.2">Another action</Item>
						</NavDropdown>
					</Nav>
			
			</Navbar>
    </div>



		<Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
		</Router>
		);
  }
}
export default Login;
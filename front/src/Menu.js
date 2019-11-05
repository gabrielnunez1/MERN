import React, { Component } from 'react';
import User from './img/user.png';
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Item from 'react-bootstrap/NavItem';
import Header from './Header';
import Section from './Section';
import Home from './Home';
import Carrousel from './Carrousel';


class Menu extends Component  {
  render (){ return (
		<React.Fragment>
			<div className="App-login">
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Nav className="mr-auto">
								<NavDropdown title='User' id="collasible-nav-dropdown" >
									<Item><Link to="/CreateAccount">Create Account</Link></Item> 
									<Item><Link to="/Login">Login </Link></Item>
								</NavDropdown>
						</Nav>

						<Nav className="ml-auto">
							<NavDropdown  id="collasible-nav-dropdown" className="navbar-toggler-icon">
									<Item><Link to="/">Menu</Link></Item> 
									<Item><Link to="/Header">Menu1</Link></Item>
							</NavDropdown>
						</Nav>
				
				</Navbar>
			</div>
				<Header></Header>
				<Section></Section>
				<Carrousel></Carrousel>
				<Home></Home>
		</React.Fragment>
		);
  }
}
export default Menu;
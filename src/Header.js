import React, { Component } from 'react';
import logo from './img/MYtineraryLogo.png';

class Header extends Component  {
	render (){ return (
		<div className="Home">
			<header className="App-header">
				<img src={logo} alt="logo" />
				<p>Find your perfect trip, designed by insiders how know and love their cities.</p>
			</header>
		</div>
			);
		}
}
export default Header;
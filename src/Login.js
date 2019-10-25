import React, { Component } from 'react';
import User from './img/user.png';

class Login extends Component  {
  render (){ return (
		<div className="App-login">
			<ul class="nav nav-tabs">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"></a>
					<img src={User} alt="Login"></img>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="#">Login in</a>
					<a class="dropdown-item" href="#">Create account</a>
					</div>
				</li>
			</ul>
    </div>
		);
  }
}
export default Login;
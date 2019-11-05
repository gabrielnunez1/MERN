import React, { Component } from 'react';
import imagen from './img/homeIcon.png';

class Home extends Component  {

  render (){ return (
		<div className="App-home">
				<a href="#"><img className="home" src={imagen} alt="home"/></a>
		</div>
		);
  }
}
export default Home;
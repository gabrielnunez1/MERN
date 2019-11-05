import React, { Component } from 'react';
import imagen from './img/circled-right-2.png';

class Section extends Component  {

  render (){ return (
		<div className="App-section">
				<a href="#"><img className="start" src={imagen} alt="start"/> </a>
				<p>Popular MYtineraries</p>
		</div>
		);
  }
}
export default Section;
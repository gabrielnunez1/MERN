import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from './img/1.jpg';
import foto2 from './img/2.jpg';
import foto3 from './img/3.jpg';
import foto4 from './img/4.jpg';
import foto5 from './img/5.jpg';
import foto6 from './img/6.jpg';
import foto7 from './img/7.jpg';
import foto8 from './img/8.jpg';
import foto9 from './img/9.jpg';
import foto10 from './img/10.jpg';
import foto11 from './img/11.jpg';
import foto12 from './img/12.jpg';


class Carrousel extends Component  {

  render (){ return (
				<Carousel>
				<Carousel.Item>
					<div className="one">	
						<img className="d-block w-100"	src={foto1}	alt="foto1"	/>
						<img className="d-block w-100" src={foto2} alt="foto2"/>
					</div>
					<div className="two">	
						<img className="d-block w-100" src={foto3} alt="foto3"/>
						<img className="d-block w-100" src={foto4} alt="foto4"/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className="one">	
						<img className="d-block w-100"	src={foto5}	alt="foto5"	/>
						<img className="d-block w-100" src={foto6} alt="foto6"/>
					</div>
					<div className="two">	
						<img className="d-block w-100" src={foto7} alt="foto7"/>
						<img className="d-block w-100" src={foto8} alt="foto8"/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
				<div className="one">	
						<img className="d-block w-100"	src={foto9}	alt="foto9"	/>
						<img className="d-block w-100" src={foto10} alt="foto10"/>
					</div>
					<div className="two">	
						<img className="d-block w-100" src={foto11} alt="foto11"/>
						<img className="d-block w-100" src={foto12} alt="foto12"/>
					</div>
				</Carousel.Item>
			</Carousel>
		);
  }
}
export default Carrousel;
import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Login from './Login';
import Home from './Home';
import Slider from './Slider';
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


function App() {
  return (
    <div className="App">
			<Login></Login>
			<Header></Header>
			<Section></Section>
			<Carousel>
				<Carousel.Item>
					<div className="one">	
						<img className="d-block w-50"	src={foto1}	alt="First slide"	/>
						<img className="d-block w-50" src={foto2} alt="First slide"/>
					</div>
					<div className="two">	
						<img className="d-block w-50" src={foto3} alt="First slide"/>
						<img className="d-block w-50" src={foto4} alt="First slide"/>
					</div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
				<div className="one">	
						<img className="d-block w-100"	src={foto5}	alt="First slide"	/>
						<img className="d-block w-100" src={foto6} alt="First slide"/>
					</div>
					<div className="two">	
						<img className="d-block w-100" src={foto7} alt="First slide"/>
						<img className="d-block w-100" src={foto8} alt="First slide"/>
					</div>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
				<div className="one">	
						<img className="d-block w-100"	src={foto9}	alt="First slide"	/>
						<img className="d-block w-100" src={foto10} alt="First slide"/>
					</div>
					<div className="two">	
						<img className="d-block w-100" src={foto11} alt="First slide"/>
						<img className="d-block w-100" src={foto12} alt="First slide"/>
					</div>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Home></Home>
    </div> 
		
  );
}

export default App;


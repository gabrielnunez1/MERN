import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Login from './Login';
import Home from './Home';
import Carrousel from './Carrousel';



function App() {
  return (
		<React.Fragment>
			<Router>
				<div className="App">
					<Login></Login>
					<Header></Header>
					<Section></Section>
					<Carrousel></Carrousel>
					<Home></Home>
				</div> 

			</Router>
		</React.Fragment>
		
  );
}

export default App;


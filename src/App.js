import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Login from './Login';
import Home from './Home';


function App() {
  return (
    <div className="App">
			<Login></Login>
			<Header></Header>
			<Section></Section>
			
			<Home></Home>
    </div> 
		
  );
}

export default App;


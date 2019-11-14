import React from 'react';
import './App.css';
import Menu from './Menu';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
	<div className="App">
	<Router>
			<Switch> 
			<Route exact path="/" component={Menu}/>
				<Route path="/Login" component={Login}/> 
			</Switch>
	</Router>
	</div>
  );
}

export default App;


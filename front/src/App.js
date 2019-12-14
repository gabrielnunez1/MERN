import React from 'react';
import './App.css';
import Menu from './Menu';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AbmCity from './AbmCity';
import Create from './Create';

function App() {
  return (
	<div className="App">
	<Router>
			<Switch> 
				<Route exact path="/" component={Menu}/>
					<Route path="/Login" component={Login}/> 

				<Route path="/front/abmCity">
				<AbmCity></AbmCity>
				</Route>
				<Route path="/front/Create">
				<Create></Create>
				</Route>
			</Switch>
	</Router>
	</div>
  );
}

export default App;


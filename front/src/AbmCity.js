import React from 'react';
import './App.css';
import Buscador from './Buscador';
import FormItem from './FormItem';
import Boton from './Boton';
import {addCity,getCity} from './actions/cityActions';
import { connect } from 'react-redux'

class AbmCity extends React.Component {
 constructor(props){
   super(props);
   this.state= {
     nombre:"",
     categoria:""
   }
 }

 
onChange2 = name => event => {
  let value_ = name === 'image'
  ? event.target.files[0]
  : event.target.value

  this.setState({[name]: value_ })

}

// deleteCity=(id)=>{
//   this.props.dispatch(deleteCity(id));
// }

submitForm =()=>{
  fetch("http://localhost:8080/city/cities",{
    method: 'POST',
    body:JSON.stringify(this.state),
    headers:{
      'Content-Type': 'application/json'
    }
   }).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data)
    this.props.dispatch(addCity(data)) 
  
  })
}

componentDidMount(){
  console.log("this")
  console.log(this)
  this.props.getcity()
}

  render(){
    return (
      <React.Fragment>
        <h1><center>ABM CITY</center></h1>
        <div>
        <Buscador></Buscador>
        </div>
        <hr/>
        <div className="asideform formulario">
          <form onSubmit={(e)=>{e.preventDefault()}}> 
            nombre:      <input type="text"  onChange={this.onChange2('nombre')} placeholder="nombre"/> <br/>
            categoria:      <input type="text"  onChange={this.onChange2('categoria')} placeholder="categoria"/>

<input type="submit" onClick={()=>{this.submitForm()}}></input>
          </form>

          <ul>
            {this.props.cties.map((city)=>{
              return (
                <li onClick={()=>{this.deleteCit(city._id)}} key={city._id}>
                  {city.nombre}
                </li>
            
              )
            })}
          </ul>
        </div>
        <hr/>
        <div id="reiniciar">
          <Boton></Boton>
        </div>
        <div id="guardar">
        <Boton></Boton>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cties:state
  }
}
export default connect(mapStateToProps)(AbmCity);
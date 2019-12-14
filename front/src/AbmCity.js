import React from 'react';
import './App.css';
import Buscador from './Buscador';
import FormItem from './FormItem';
import Boton from './Boton';
import { getCity, addCity } from './actions/cityActions';
import { connect } from 'react-redux'

class AbmCity extends React.Component {
 constructor(props){
   super(props);
   this.state= {
    country:"",
    city:""
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


    this.props.dispatch(addCity(data)) 
  
  })
}

componentDidMount(){
  this.props.getCity()
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
          country:      <input type="text"  onChange={this.onChange2('country')} placeholder="country"/> <br/>
          city:      <input type="text"  onChange={this.onChange2('city')} placeholder="city"/>

          <input type="submit" onClick={()=>{this.submitForm()}}></input>
          </form>

          <ul>
            {this.props.cities &&   this.props.cities.filter((prod)=>{return prod.country && ( prod.country.indexOf(this.props.buscador)!=-1)}).map((city)=>{
              return (
                <li  key={city._id}>
                  {city.country}
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
    cities:state.cityReducer,
    buscador:state.buscadorReducer
  }
}
export default connect(mapStateToProps, {getCity})(AbmCity);
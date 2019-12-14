import React from 'react';
import './App.css';
import FormItem from './FormItem';
import Boton from './Boton';
import { getUsers, addUsers } from './actions/userActions';
import { connect } from 'react-redux'


class Create extends React.Component {
    constructor(props){
        super(props);
        this.state= {
         email:"",
         password:""
        }
      }
     
      
     onChange2 = name => event => {
       let value_ = name === 'image'
       ? event.target.files[0]
       : event.target.value
     
       this.setState({[name]: value_ })
     
     }
     
     // deletepassword=(id)=>{
     //   this.props.dispatch(deletepassword(id));
     // }
     
     submitForm =()=>{
       fetch("http://localhost:8080/password/cities",{
         method: 'POST',
         body:JSON.stringify(this.state),
         headers:{
           'Content-Type': 'application/json'
         }
        }).then((res)=>{
         return res.json();
       }).then((data)=>{
     
     
         this.props.dispatch(addUsers(data)) 
       
       })
     }
     
     componentDidMount(){
       this.props.getUsers()
     }
     
  
    render() {
      return (
        <React.Fragment>
          <h1><center>ABM password</center></h1>
          <div>
          </div>
          <hr/>
          <div className="asideform formulario">
            <form onSubmit={(e)=>{e.preventDefault()}}> 
            email:      <input type="text"  onChange={this.onChange2('email')} placeholder="email"/> <br/>
            password:      <input type="text"  onChange={this.onChange2('password')} placeholder="password"/>
  
            <input type="submit" onClick={()=>{this.submitForm()}}></input>
            </form>
  
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
  
  export default Create;
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm';


class SignUpSection extends Component {
    constructor(props) {
        super(props);
        this.state = { nom :'',prenom:'',telephone:'',adresse:'' } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        const changed = event.target.name;
        this.setState({[changed]: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Google account was submitted');
      event.preventDefault();
    }
    
    render() { 
        return (
        <div className="bg-gray-100 w-full h-screen flex flex-col place-items-center justify-evenly ">
        <h1 className="text-4xl font-bold text-blue-900">NOUVEAU COMPTE</h1>
        <SignUpForm nom={this.state.nom} prenom={this.state.prenom} telephone={this.state.telephone} adresse={this.state.adresse} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></SignUpForm>
        <Link to="/LogIn" className="text-blue-900 underline"> Avez vous un compte ? </Link>  
        <div>
            </div>    
        </div>);
    }
}
 
export default SignUpSection;
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
        <div className="bg-[#fefefe] w-full h-screen flex flex-col  place-items-center justify-evenly ">
        <h1 className=" mb-[-60px] text-[30px] md:text-5xl font-bold text-[#160042] underline decoration-[#4285f4]  decoration-[10px]">NOUVEAU COMPTE</h1>
        <SignUpForm nom={this.state.nom} prenom={this.state.prenom} telephone={this.state.telephone} adresse={this.state.adresse} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></SignUpForm>
        <Link to="/LogIn" className="text-[#4285f4] underline mx-auto mt-[-20px]"> Avez-vous déjà un compte ? </Link>  
        <div>
            </div>    
        </div>);
    }
}
 
export default SignUpSection;
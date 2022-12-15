import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm';


class SignUpSection extends Component {
    state = {  } 
    render() { 
        return (
        <div className="bg-gray-100 w-full h-screen flex flex-col place-items-center justify-evenly ">
        <h1 className="text-4xl font-bold text-blue-900">NOUVEAU COMPTE</h1>
        <SignUpForm></SignUpForm>
        <Link to="/" className="text-blue-900"> Avez vous un compte ? </Link>      
        </div>);
    }
}
 
export default SignUpSection;
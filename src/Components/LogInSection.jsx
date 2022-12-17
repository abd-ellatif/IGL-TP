import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


class LogInSection extends Component {
    state = {  } 
    handleSubmit(event) {
        alert('Google account was submitted');
        event.preventDefault();
      }
    render() {
        return (
        <div className="bg-gray-100 w-full h-screen flex flex-col place-items-center justify-evenly ">
        <h1 className="text-6xl font-bold text-blue-500">Connexion</h1>  
        <div className="flex flex-col place-items-center h-14">
        <Button bgColor="bg-blue-900 " handleClick={this.handleSubmit}>
        <i class="fa-brands fa-google px-3"></i>
            Connecter à votre compte Google
          </Button>   
          <Link to="/SignUp" className="mt-5 text-blue-900 underline">Voulez vous plutot vous inscrire?</Link>
        </div>
        <div>

        </div>
       
        </div>
        );
    }
}
 
export default LogInSection;
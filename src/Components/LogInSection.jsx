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
        <div className="bg-[#fefefe] w-full h-screen flex flex-col place-items-center ">
        <h1 className="md:text-6xl text-5xl font-bold text-[#4285f4] mt-[150px] mb-[100px] underline decoration-[#4285f4]  decoration-[10px]">CONNEXION</h1>  
        <div className="flex justify-center w-[485px] h-[51px] mb-5 mx-autofont-regular text-white">
          <Button handleClick={this.handleSubmit} bgColor="bg-[#160042]">
            <i class="fa-brands fa-google px-3 "></i>
              Se connecter avec Google
          </Button> 
        </div>
          <h2 className='underline text-[#4285f4] font-poppins '><Link to="/SignUp">Voulez-vous plutôt vous inscrire ?</Link></h2>
        </div>
        );
    }
}
 
export default LogInSection;
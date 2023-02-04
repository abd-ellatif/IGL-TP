import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import jwt_decode from 'jwt-decode'


class LogInSection extends Component {
    state = { hidden : true  } 


    componentDidMount(){
      /* global google */
      google.accounts.id.initialize({
          client_id : "624611719020-gg1h2sfr6aru9fmqu3ji4qf96kps6h11.apps.googleusercontent.com",
          callback :  this.handleHH
      })

      google.accounts.id.renderButton(document.getElementById('LogInButton'),{theme:"outline",size:"large"})

    }

    handleHH = async (response)=>{
      await this.props.handleLogin(response)
      this.setState({hidden : false})
    }





    render() {
        return (
        <div className="bg-[#fefefe] w-full h-screen flex flex-col place-items-center ">
        <h1 className="md:text-6xl text-5xl font-bold text-[#4285f4] mt-[150px] mb-[100px] underline decoration-[#4285f4]  decoration-[10px]">CONNEXION</h1>  
        <div className="flex justify-center w-[485px] h-[51px] mb-5 mx-autofont-regular text-white">
          <div id='LogInButton'></div>
        </div>
        {this.state.hidden ? null :<button className='bg-blue-600 white p-3 m-4 text-white rounded' onClick={()=>{window.location.href = '/UserPage'}}> Bonjour {this.props.user.nom+' '+this.props.user.prenom}, Acceder au site </button>}
          <h2 className='underline text-[#4285f4] font-poppins '><Link to="/SignUp">Voulez-vous plutôt vous inscrire ?</Link></h2>
        </div>
        );
    }
}
 
export default LogInSection;
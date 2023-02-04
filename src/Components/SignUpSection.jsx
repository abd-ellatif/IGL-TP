import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm';
import jwt_decode from 'jwt-decode';
import { redirect } from 'react-router-dom/dist';


class SignUpSection extends Component {
    constructor(props) {
        super(props);
        this.state = { nom :'',prenom:'',telephone:'',adresse:'' } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        /* global google */
        google.accounts.id.initialize({
            client_id : "624611719020-gg1h2sfr6aru9fmqu3ji4qf96kps6h11.apps.googleusercontent.com",
            callback : this.handleSubmit
        })

        google.accounts.id.renderButton(document.getElementById('SignUpButton'),{theme:"outline",size:"large"})

      }


    handleChange(event) {
        const changed = event.target.name;
        this.setState({[changed]: event.target.value});
    }

    
    handleSubmit(response) {
      let profile_obj = jwt_decode(response.credential)
      fetch('http://127.0.0.1:8000/signup',{method:'POST',body:JSON.stringify({nom:this.state.nom,
      prenom:this.state.prenom,
      adresse:this.state.adresse,
      email:profile_obj.email,
      telephone:this.state.telephone}),headers:{'Content-type': 'application/json; charset=UTF-8'}})
      .then((response) => response.json())
      .then((data) => {
         alert('Utilisateur Ajouté ! Vous pouvez maintenant vous connecter')
      })
      .catch((err) => {
         console.log(err.message);
      })
      
      window.location.href = 'http://localhost:3000/LogIn'
    }
    
    render() { 
        return (
        <div className="bg-[#fefefe] w-full h-screen flex flex-col  place-items-center justify-evenly ">
        <h1 className=" mb-[-60px] text-[30px] md:text-5xl font-bold text-[#160042] underline decoration-[#4285f4]  decoration-[10px]">NOUVEAU COMPTE</h1>
        <SignUpForm nom={this.state.nom} prenom={this.state.prenom} telephone={this.state.telephone} adresse={this.state.adresse} handleChange={this.handleChange} ></SignUpForm>
        <div id='SignUpButton'></div>
        <Link to="/LogIn" className="text-[#4285f4] underline mx-auto mt-[-20px]"> Avez-vous déjà un compte ? </Link>  
        <div>
            </div>    
        </div>);
    }
}
 
export default SignUpSection;
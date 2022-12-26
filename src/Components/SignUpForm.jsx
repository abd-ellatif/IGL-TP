import React, { Component } from 'react'
import Button from './Button';


class SignUpForm extends Component {
    render() {
      let labelClass = "grid grid-cols-1 text-blue-500";
      let inputClass = "text-center focus:outline-none appearance-none border rounded-[10px] w-[350px] h-[50px] w-full py-2 px-3 text-gray-700 leading-tight ";
      return (
        <div className="flex flex-col justify-center align-center ">
            <form className="p-10 ml-5 grid md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-8 "onSubmit={this.handleSubmit}>
          <label className={labelClass}>
            Nom:
            <input  name="nom" className={inputClass} placeholder="exemple : Mdni" type="text" value={this.props.nom} onChange={this.props.handleChange} />
          </label>
          <label className={labelClass}>
            Prénom:
            <input name ="prenom" className={inputClass} placeholder="exemple : Rafik" type="text" value={this.props.prenom} onChange={this.props.handleChange} />
          </label>
          <label className={labelClass}>
            Téléphone:
            <input name="telephone" className={inputClass} placeholder="+213 XXXXXXXXX" type="text" value={this.props.telephone} onChange={this.props.handleChange} />
          </label>
          <label className={labelClass}>
            Adresse:
            <input name="adresse" className={inputClass} placeholder="ex : Alger-Oued Smar" type="text" value={this.props.adresse} onChange={this.props.handleChange} />
          </label>
                    
        </form>   
        <div className="flex justify-center w-[485px] h-[51px]  mx-auto font-regular text-white">
          <Button handleClick={this.props.handleSubmit} bgColor="bg-[#160042]">
            <i class="fa-brands fa-google px-3 "></i>
              Ajouter votre compte Google
          </Button> 
        </div>
        </div>
      );
    }
  }

  
  export default SignUpForm;
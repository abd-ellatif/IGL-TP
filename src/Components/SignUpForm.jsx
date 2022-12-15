import React, { Component } from 'react'
import Button from './Button';


class SignUpForm extends Component {
    constructor(props) {
      super(props);
      this.state = {Nom: '',Prénom: '',Téléphone: '',Adresse :''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const changed = event.target.name;
        this.setState({[changed]: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      let labelClass = "grid grid-cols-1 text-blue-500";
      let inputClass = "text-center focus:outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
      return (
        <div className="flex flex-col justify-center align-center">
            <form className="p-10 grid grid-cols-2 gap-8 "onSubmit={this.handleSubmit}>
          <label className={labelClass}>
            Nom:
            <input  name="Nom" className={inputClass} placeholder="ex : Mdni" type="text" value={this.state.nom} onChange={this.handleChange} />
          </label>
          <label className={labelClass}>
            Prénom:
            <input name ="Prénom" className={inputClass} placeholder="ex : Rafik" type="text" value={this.state.nom} onChange={this.handleChange} />
          </label>
          <label className={labelClass}>
            Téléphone:
            <input name="Téléphone" className={inputClass} placeholder="+213 XXXXXXXXX" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className={labelClass}>
            Adresse:
            <input name="Adresse" className={inputClass} placeholder="ex : Alger-Oued Smar" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
                    
        </form>   
        <div className="flex justify-center">
        <Button bgColor="bg-blue-900 ">
            Google
          </Button> 

        </div>

       
        </div>
        
      );
    }
  }

  
  export default SignUpForm;
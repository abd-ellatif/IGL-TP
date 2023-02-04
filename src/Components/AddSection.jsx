import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AddAnnounce from './AddAnnounce';




class AddSection extends Component {
    constructor(props) {
        super(props);
        this.state = { titre :'',categorie:'',type:'',surface:'',prix:'',wilaya:'',commune:'',description:''} 
        this.handleChange = this.handleChange.bind(this);
       
      }

    handleChange(event) {
        const changed = event.target.name;
        this.setState({[changed]: event.target.value});
    }

    handleSubmit = ()=>{
     fetch("http://127.0.0.1:8000/ai_create", {
      method: "POST",
      body: JSON.stringify({titre: this.state.titre, description: this.state.description,surface :Number(this.state.surface),price :Number(this.state.prix) ,type:this.state.type,category:this.state.categorie,Signal: false,location:this.state.wilaya + '-'+this.state.commune,owner:this.props.user.id}),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Annonce ajoutée')
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    
    render() { 
        return (
        <div className="bg-[#fefefe] lg:h-full flex flex-col  place-items-center justify-evenly ">
            <h1 className=" text-[30px] md:text-5xl font-bold text-[#160042] lg:mb-[10px] mb-[-20px] lg:mt-[50px] underline decoration-[#4285f4] decoration-[10px]">AJOUTER UNE ANNONCE</h1>
            <AddAnnounce wilaya={this.state.wilaya} commune={this.state.commune} titre={this.state.titre} categorie={this.state.categorie} type={this.state.type} surface={this.state.surface} prix={this.state.prix}  description={this.state.description} handleChange={this.handleChange} ></AddAnnounce>
            <button class="bg-[#4285F4] mt-[30px] mb-[10px] lg:mt-[-150px] lg:ml-[600px] md:ml-[10px] lg:w-[215px] lg:h-[44px] w-[270px] h-[44px] md:text-[16px] text-[13px] rounded-md  p-3 text-white text-center" onClick={this.handleSubmit}> Ajouter l'annonce</button>  
               
        </div>);
    }
}
 
export default AddSection;
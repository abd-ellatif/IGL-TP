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
    
    render() { 
        return (
        <div className="bg-[#fefefe] lg:h-full flex flex-col  place-items-center justify-evenly ">
            <h1 className=" text-[30px] md:text-5xl font-bold text-[#160042] lg:mb-[10px] mb-[-20px] lg:mt-[50px] underline decoration-[#4285f4] decoration-[10px]">AJOUTER UNE ANNONCE</h1>
            <AddAnnounce titre={this.state.titre} categorie={this.state.categorie} type={this.state.type} surface={this.state.surface} prix={this.state.prix} wilaya={this.state.wilaya} commune={this.state.commune} description={this.state.description} handleChange={this.handleChange} ></AddAnnounce>
            <button class="bg-[#4285F4] mt-[30px] mb-[10px] lg:mt-[-150px] lg:ml-[600px] md:ml-[10px] lg:w-[215px] lg:h-[44px] w-[270px] h-[44px] md:text-[16px] text-[13px] rounded-md  p-3 text-white text-center"><Link to="/" > Ajouter l'annonce</Link></button>  
               
        </div>);
    }
}
 
export default AddSection;
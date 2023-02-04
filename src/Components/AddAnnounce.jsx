import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import {useState} from 'react'
import imgIcon from '../assets/AddImage.svg'
import CountryStateCity from './CountryStateCity'


class AddAnnounce extends Component {

   constructor(props){
    super(props);
    this.state = {
      images: []
    }
   }

   AddImage = (e) => {
    e.preventDefault();
    this.setState(this.state.images.push(e.target.value));
    alert("current state " + this.state.images);
  }
    typeBien = [{label:"Appartement",value:"appartement",},{label:"Maison",value:"Maison",},{label:"Bungalow",value:"Bungalow",},{label:"Terrain",value:"Terrain",},{label:"Terrain Agricole",value:"Terrain Agricole",},];
    catBien = [{label:"Location",value:"Location",},{label:"Location pour vacances",value:"Location pour vacances",},{label:"Vente",value:"Vente",},{label:"Echange",value:"Echange",}];

    render() {
      return (
        <div className='lg:grid lg:grid-cols-5 lg:h-full lg:gap-0 grid grid-cols-1 lg:ml-[10%] ' >
          <form className="p-10 ml-5 lg:cols-span-4 cols-span-1 lg:space-y-0 space-y-3 lg:ml-0 md:ml-[-10px]" onSubmit={this.handleSubmit}>
            <label className="text-[#4285f4] md:cols-span-4 ">
                <h1>Titre</h1>
                <input  name="titre" className="h-[45px] border-gray-200 rounded-[13px] md:w-[350px] w-[250px] " placeholder="Saisir du texte ..." type="text" value={this.props.titre} onChange={this.props.handleChange} />
            </label>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:space-y-0 space-y-3'>
              <div className='text-[#4285f4] '>
                  <h1>Type</h1>
                  <input  name="categorie" className="h-[45px] border-gray-200 rounded-[13px] md:w-[350px] w-[250px] " placeholder="Saisir du texte ..." type="text" value={this.props.categorie} onChange={this.props.handleChange} />
                  
              </div>
              <div className='text-[#4285f4]'>
                  <h1>Catégorie</h1>
                  <input  name="type" className="h-[45px] border-gray-200 rounded-[13px] md:w-[350px] w-[250px] " placeholder="Saisir du texte ..." type="text" value={this.props.type} onChange={this.props.handleChange} />
              </div>
            </div>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:space-y-0 space-y-3'>
              <div className='text-[#4285f4]'>
                  <h1>Surface</h1>
                  <input name ="surface" className='lg:w-[250px] md:w-[200px] w-[200px] h-[45px] rounded-[13px] border-gray-200' placeholder="La surface..." type="text" value={this.props.surface} onChange={this.props.handleChange} />
              </div>
              <div className='text-[#4285f4]'>
                  <h1>Prix</h1>
                  <input name="prix" className='lg:w-[250px] md:w-[200px] w-[200px] h-[45px] rounded-[13px] border-gray-200' placeholder="0000.000 DA" type="text" value={this.props.prix} onChange={this.props.handleChange} />
              </div>
            </div>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:pb-5 md:space-y-0 space-y-3'>
            <h1>Wilaya</h1>
            <input name="wilaya" className='lg:w-[250px] md:w-[200px] w-[200px] h-[45px] rounded-[13px] border-gray-200' placeholder="" type="text" value={this.props.wilaya} onChange={this.props.handleChange} />
            </div>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:pb-5 md:space-y-0 space-y-3'>
            <h1>Commune</h1>
            <input name="commune" className='lg:w-[250px] md:w-[200px] w-[200px] h-[45px] rounded-[13px] border-gray-200' placeholder="" type="text" value={this.props.commune} onChange={this.props.handleChange} />
            </div>
            <div className="text-[#4285f4]  cols-span-4">
                <h1>Description</h1>
                <input  name="description" className=" h-[200px] md:w-[400px] lg:w-[500px] w-[300px] border-gray-200 rounded-[13px] pb-[150px]" placeholder="Saisir du texte ici ..." type="text" value={this.props.description} onChange={this.props.handleChange} />
            </div>
          </form>   
          <div className="flex  flex-col place-items-center  bg-white w-[250px] h-[200px] lg:w-[350px] lg:h-[300px] lg:mt-[100px] lg:ml-auto ml-[80px] md:ml-[100px] space-y-2 rounded-[20px] shadow-[0px_10px_35px_0px_rgba(0,0,0,0.2)] lg:col-start-4 lg:cols-span-1 ">
              <img src={imgIcon} alt="pic" class="lg:h-[400px] lg:w-[200px] h-[150px] w-[100px]" />
              <label for="image" className='cursor-pointer  text-[#160042] underline '>Importer des images</label>
              <input type='file' multiple required name='image' id="image" accept='image/*' style={{visibility:'hidden'}} onChange={(e)=>{alert(e.target.files)}} />  
            
          </div>
         
        </div>
      );
    }
  }

 
  export default AddAnnounce;
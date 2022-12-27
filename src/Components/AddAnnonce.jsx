import React, { Component } from 'react'
import {useState} from 'react'
import Button from './Button';
import imgIcon from '../assets/AddImage.svg'
import CountryStateCity from './CountryStateCity'


const AddAnnonce = () => {
  const [selectedCategory, setType] = React.useState();
  return (
    <div className='md:grid md:grid-cols-5 md:gap-0 grid grid-cols-1 md:ml-auto ml-[-35px]' >
          <form className="p-10 ml-5 md:cols-span-4 cols-span-1 md:space-y-0 space-y-3" onSubmit={this.handleSubmit}>
            <label className="text-[#4285f4] md:cols-span-4 ">
                Titre
                <input  name="titre" className="h-[45px] border-gray-200 rounded-[13px] " placeholder="Saisir du texte ..." type="text" value={this.props.titre} onChange={this.props.handleChange} />
            </label>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:space-y-0 space-y-3'>
              <div className='text-[#4285f4] '>
                  Catégorie
                  <input name ="categorie" className='w-[250px] h-[45px] rounded-[13px] border-gray-200' placeholder="exemple : Rafik" type="text" value={this.props.categorie} onChange={this.props.handleChange} />
              </div>
              <div className='text-[#4285f4]'>
                  <h1>Type</h1>
                  <input name="type" className='w-[250px] h-[45px] rounded-[13px] border-gray-200' placeholder="+213 XXXXXXXXX" type="text" value={this.props.type} onChange={this.props.handleChange} />
              </div>
            </div>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:space-y-0 space-y-3'>
              <div className='text-[#4285f4]'>
                  <h1>Surface</h1>
                  <input name ="surface" className='w-[250px] h-[45px] rounded-[13px] border-gray-200' placeholder="La surface" type="text" value={this.props.surface} onChange={this.props.handleChange} />
              </div>
              <div className='text-[#4285f4]'>
                  <h1>Prix</h1>
                  <input name="prix" className='w-[250px] h-[45px] rounded-[13px] border-gray-200' placeholder="0000.000 DA" type="text" value={this.props.prix} onChange={this.props.handleChange} />
              </div>
            </div>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:pb-5 md:space-y-0 space-y-3'>
              <CountryStateCity/>
            </div>
            <div className="text-[#4285f4]  cols-span-4">
                Description
                <input  name="description" className=" h-[200px] md:w-[500px] w-[300px] border-gray-200 rounded-[13px] pb-[150px]" placeholder="Saisir du texte ici ..." type="text" value={this.props.description} onChange={this.props.handleChange} />
            </div>
          </form>   
          <div class="bg-white w-[250px] h-[200px] md:w-[350px] md:h-[300px] md:mt-[100px] md:ml-auto ml-[100px] space-y-2 rounded-[20px] shadow-[10px_5px_35px_10px_rgba(200,200,241,0.2)] md:col-start-4 md:cols-span-1 ">
                <div class="md:mt-[80px] md:ml-[110px] m-[15px] ml-[60px]">
                  <img src={imgIcon} alt="pic" />
                  <h1 class="text-[#160042] underline ml-[-15px]">Importer des images</h1>
                </div>
          </div>
        </div>
  );
} ;
export default AddAnnonce
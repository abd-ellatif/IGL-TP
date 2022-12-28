import React, { Component } from 'react'
import {useState} from 'react'
import imgIcon from '../assets/AddImage.svg'
import CountryStateCity from './CountryStateCity'


class AddAnnounce extends Component {
    render() {
      return (
        <div className='lg:grid lg:grid-cols-5 lg:h-full lg:gap-0 grid grid-cols-1  ' >
          <form className="p-10 ml-5 lg:cols-span-4 cols-span-1 lg:space-y-0 space-y-3 lg:ml-0 md:ml-[-10px]" onSubmit={this.handleSubmit}>
            <label className="text-[#4285f4] md:cols-span-4 ">
                <h1>Titre</h1>
                <input  name="titre" className="h-[45px] border-gray-200 rounded-[13px] md:w-[350px] w-[250px] " placeholder="Saisir du texte ..." type="text" value={this.props.titre} onChange={this.props.handleChange} />
            </label>
            <div className='md:flex md:justify-between md:space-x-4 md:pt-5 md:space-y-0 space-y-3'>
              <div className='text-[#4285f4] '>
                  <h1>Catégorie</h1>
                  <input name ="categorie" className='lg:w-[250px] md:w-[200px] w-[200px] h-[45px] rounded-[13px] border-gray-200' placeholder="La catégorie..." type="text" value={this.props.categorie} onChange={this.props.handleChange} />
              </div>
              <div className='text-[#4285f4]'>
                  <h1>Type</h1>
                  <input name="type" className='lg:w-[250px] md:w-[200px] w-[200px] h-[45px] rounded-[13px] border-gray-200' placeholder="Le type..." type="text" value={this.props.type} onChange={this.props.handleChange} />
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
              <CountryStateCity/>
            </div>
            <div className="text-[#4285f4]  cols-span-4">
                <h1>Description</h1>
                <input  name="description" className=" h-[200px] md:w-[400px] lg:w-[500px] w-[300px] border-gray-200 rounded-[13px] pb-[150px]" placeholder="Saisir du texte ici ..." type="text" value={this.props.description} onChange={this.props.handleChange} />
            </div>
          </form>   
          <div class="bg-white w-[250px] h-[200px] lg:w-[350px] lg:h-[300px] lg:mt-[100px] lg:ml-auto ml-[80px] md:ml-[150px] space-y-2 rounded-[20px] shadow-[0px_10px_35px_0px_rgba(0,0,0,0.2)] lg:col-start-4 lg:cols-span-1 ">
                <div class="lg:mt-[80px] lg:ml-[110px] m-[15px] ml-[60px]">
                  <img src={imgIcon} alt="pic" />
                  <h1 class="text-[#160042] underline ml-[-15px]">Importer des images</h1>
                </div>
          </div>
        </div>
      );
    }
  }

 
  export default AddAnnounce;
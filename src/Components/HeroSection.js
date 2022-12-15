import React, { Component } from 'react';
import Button from './Button';
import './Herosection.css';





class  HeroSection extends Component {
    state = {  } 
    render() { 
        return (<div className="w-full h-screen bg-cover bg-center bgImg flex flex-row justify-start">
            <div className="my-36 w-1/2 p-10">
                <h1 className="m-5 text-white font-bold text-3xl font-Poppins">Consultez les annonces immobilières les plus récentes ! </h1>
                <h3 className="m-5 text-blue-900">
                Des annonces de Location, vente, bungalow...
                </h3>
                <div className="h-10 flex">
                <Button bgColor="bg-blue-900" txtColor="text-white">Rejoindre </Button>
                </div>
                

            </div>
             
              </div>)
        ;
    }
}
 
export default HeroSection ;
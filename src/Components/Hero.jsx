import React from 'react';
import Typed from 'react-typed';
import videoBg from '../assets/videoBg.mp4'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='text-[#4285f4] md:pt-10 font-poppins'>
        <div className=' lg:mt-[-90px] max-w-[800px] mt-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-5xl sm:text-4xl text-xl font-extrabold  text-[#f8f8f8] '>Découvrez les annonces immoblières les plus <span className='text-[#f4b400]'>récentes</span>.</h1> 
            <div className='flex justify-center items-center py-4' >
                <p className='md:text-4xl sm:text-3xl text-xl pt-1 font-medium text-[#FFFFFF]'>Des annonces de </p>
                <Typed 
                className='md:text-4xl sm:text-3xl text-xl pt-1 font-semibold pl-2 text-[#83b7fc]'
                strings={['Terrains Agricoles ','Maisons','Terrains','Bungalow']} typeSpeed={150} backSpeed={130} loop/>
            </div>
            <button className='bg-[#4285f4] w-[245px] rounded-md mx-auto mt-10 md:ml-[36%] py-3 text-white'><Link to="/SignUp">Rejoindre</Link></button>
        </div>
       <div className="absolute top-20 left-0 w-[100%] h-[100%]  bg-[#000000cc] -z-40"></div>
       <video src={videoBg} autoPlay loop muted className='absolute w-[100%] top-20 h-[100%] object-cover -z-50'/>
    </div>
  )
}

export default Hero


import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Navbar = () => {

  const[nav,setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav) 
  }
  return (
    <div className=' flex sticky justify-between top-0  items-center h-20 font-poppins  max-w-10xl mx-auto px-10 text-white bg-white border-b-2 z-50'>
        <h1 className='w-full text-3xl font-bold text-[#4285f4]'><Link to="/">LOGO.</Link></h1>
        <div className='hidden md:flex space-x-4' >
          <Link to="/SignUp"><button className='bg-[#f8f8f8] w-[200px]  rounded-md  p-3 text-[#4285f4]'>S'inscrire</button></Link>
          <Link to="/LogIn"><button className='bg-[#4285F4] w-[200px]  rounded-md  p-3 text-white'>Se connecter</button></Link>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} color="#4285f4" /> : <AiOutlineMenu size={20} color="#4285f4" />} 
        </div>
        
        <div className= {nav ? 'fixed left-0 top-0 w-[70%] h-full font-poppins  border-r border-r-gray-900 bg-white ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
          <h1 className='w-full left-50 text-3xl font-bold m-4 text-[#4285f4]'>LOGO.</h1>
          <div className='flex flex-col space-y-10 items-center mt-20'>
          <Link to="/SignUp"><button className='bg-[#f8f8f8] w-[200px]  rounded-md  p-3 text-[#4285f4]'>S'inscrire</button></Link>
          <Link to="/LogIn"><button className='bg-[#4285F4] w-[200px] rounded-md   p-3 text-white'>Se connecter</button></Link>
          </div>
        <div/>
    </div>
    </div>
  )
}

export default Navbar
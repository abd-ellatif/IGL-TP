import React, { Component } from 'react'
import NavBar from './NavBar'
import Button from './Button'
import { Link } from 'react-router-dom'


class  LogInNavBar extends Component {
    state = {  } 
    render() { 
      let logo = <Link to="/"> <h3 className='text-blue-500 font-bold  text-xl'> .Logo</h3> </Link>
        return (
         <NavBar bgColor="bg-white" logo={logo}>
          <Link to="/LogIn"> <Button
          bgColor="bg-sky-600"
          txtColor="text-white"
          handleClick={() => {}}
        >
          Connecter
        </Button> </Link>
        

        <Link to="./SignUp"><Button
          bgColor="bg-gray-200"
          txtColor="text-sky-600"
          handleClick={() => {}}
        >
          S'iscrire
        </Button> </Link>
        
      </NavBar>
        );
    }
}
 
export default LogInNavBar ;
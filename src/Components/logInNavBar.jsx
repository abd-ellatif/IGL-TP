import React, { Component } from 'react'
import NavBar from './NavBar'
import Button from './Button'
import { Link } from 'react-router-dom'


class  LogInNavBar extends Component {
    state = {  } 
    render() { 
      let logo = <Link to="/"> Logo </Link>
        return (
         <NavBar bgColor="bg-white/80" logo={logo}>
        <Button
          bgColor="bg-sky-600"
          txtColor="text-white"
          handleClick={() => {}}
        >
          <Link to="/LogIn"> Se Connecter </Link>
        </Button>
        <Button
          bgColor="bg-gray-200"
          txtColor="text-sky-600"
          handleClick={() => {}}
        >
          <Link to="./SignUp"> inscrire </Link>
        </Button>
      </NavBar>
        );
    }
}
 
export default LogInNavBar ;
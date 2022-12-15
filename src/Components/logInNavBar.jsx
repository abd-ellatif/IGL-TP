import React, { Component } from 'react'
import NavBar from './NavBar'
import Button from './Button'
class  LogInNavBar extends Component {
    state = {  } 
    render() { 
        return (
         <NavBar bgColor="bg-white">
        <Button
          bgColor="bg-sky-600"
          txtColor="text-gray-200"
          handleClick={() => {}}
        >
          Se connecter
        </Button>
        <Button
          bgColor="bg-gray-200"
          txtColor="text-sky-600"
          handleClick={() => {}}
        >
          inscrire
        </Button>
      </NavBar>
        );
    }
}
 
export default LogInNavBar ;
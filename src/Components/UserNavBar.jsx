import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'
import '../DetailedAnnounce.css'

class UserNavBar extends Component {
    state = {  } 
    render() { 
        return (
           
            <NavBar bgColor="bg-[#fcfcfc]" logo={<Link to=""><img src='/logoB.png' alt='DARNA' className='h-10 w-40'></img> </Link>}>
                <UserCard user={this.props.user}/>
                <div onClick={()=>window.location.reload()} className=" mx-0 md:mx-[-25px] mt-[10.5px]">
                <Link to="Messagerie" ><i className="fa-regular fa-envelope fa-lg mr-10"></i></Link>
                </div>
                
            </NavBar>
        );
    }
}
 
export default UserNavBar;
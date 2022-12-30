import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'
import '../DetailedAnnounce.css'

class UserNavBar extends Component {
    state = {  } 
    render() { 
        return (
           
            <NavBar bgColor="bg-[#fcfcfc]" logo={<Link to="/"><h3 className='text-[#160042] text-3xl font-semibold'>LOGO</h3> </Link>}>
                <UserCard user={this.props.user}>
                </UserCard>
                <Link to="/Messagerie" className=" mx-0 md:mx-[-25px] mt-[10.5px]"><i className="fa-regular fa-envelope fa-lg"></i></Link>
            </NavBar>
        );
    }
}
 
export default UserNavBar;
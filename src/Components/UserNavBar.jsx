import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'


class UserNavBar extends Component {
    state = {  } 
    render() { 
        return (
            <NavBar bgColor="bg-white" logo={<Link to="/"><h3 class="md:ml-auto ml-[10px] md:mt-auto mt-[8px] font-bold md:text-3xl text-[#160042] ">LOGO</h3> </Link>}>
            <NavBar bgColor="bg-white" logo={<Link to="/"><h3>Logo</h3> </Link>}>
                <UserCard user={this.props.user}>
                </UserCard>
                <Link to="/" className=" mx-5 mt-[10.5px]"><i className="fa-regular fa-envelope fa-lg"></i></Link>
            </NavBar>
        );
    }
}
 
export default UserNavBar;
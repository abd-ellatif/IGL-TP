import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'


class UserNavBar extends Component {
    state = {  } 
    render() { 
        return (
           
            <NavBar bgColor="bg-blue-500" logo={<Link to="/"><h3 className='text-white text-3xl font-semibold'>.Logo</h3> </Link>}>
                <UserCard user={this.props.user}>
                </UserCard>
                <Link to="/" className=" mx-5 mt-[10.5px]"><i className="fa-regular fa-envelope fa-lg"></i></Link>
            </NavBar>
        );
    }
}
 
export default UserNavBar;
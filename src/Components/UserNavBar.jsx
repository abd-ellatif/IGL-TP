import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'


class UserNavBar extends Component {
    state = {  } 
    render() { 
        return (
            <NavBar bgColor="bg-white" logo={<Link to="/"><h3>Logo</h3> </Link>}>
                <UserCard user={this.props.user}>
                </UserCard>
                <Link to="/" className=" mx-10 mt-2"><i className="fa-regular fa-envelope fa-lg"></i></Link>
            </NavBar>
        );
    }
}
 
export default UserNavBar;
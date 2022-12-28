import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'
import AdminCard from './AdminCard';


class AdminNavBar extends Component {
    state = {  } 
    render() { 
        return (
           
            <NavBar bgColor="bg-white" logo={<Link to="/"><h3>Logo</h3> </Link>}>
                <AdminCard></AdminCard>
            </NavBar>
        );
    }
}
 
export default AdminNavBar;
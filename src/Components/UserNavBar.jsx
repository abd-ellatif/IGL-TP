import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'


class UserNavBar extends Component {
    state = {  } 
    render() { 
        return (<div>
            <NavBar>
                <UserCard user={this.props.user}>
                </UserCard>
            </NavBar>
        </div>);
    }
}
 
export default UserNavBar;<div>
</div>
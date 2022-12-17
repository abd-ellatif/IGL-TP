import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class UserCard extends Component {
    state = {expandIcon : "fa-solid fa-chevron-down",hidden : true}
    
    cls = this.props.user.icon == null ? "fa-regular fa-circle-user" : this.props.user.icon;
    handleExpand = ()=> {
        if (this.state.expandIcon == "fa-solid fa-chevron-down") {this.setState({expandIcon : "fa-solid fa-chevron-up",hidden : false})}
        else { this.setState({expandIcon :"fa-solid fa-chevron-down",hidden : true })}
    }
    render() { 
        
        return (
        <div className="static">
        <div className="flex justify-around place-items-center w-48 bg-gray-400 rounded h-10">
            <i className={this.cls}></i>
            <h3> {this.props.user.name}</h3>
            <button  onClick={this.handleExpand} >
                <i className={this.state.expandIcon}></i>
            </button>
        </div>
        {this.state.hidden == false ? 
        <div className=" pt-6 grid grid-cols-1 justify-items-center absolute rounded mt-2 h-48 w-48 bg-gray-400">
            <div>
            Ajouter une annonce

            <Link  to="/">
            
            </Link>

            </div>
           
           <div>
           <Link  to="/">
            Annonces
            
            </Link>
                    </div>
           <div> 
           <Link to="/">
           Saved
           </Link>
           </div>
          

        </div> : null}
        
        </div>
        
        );
        
    }
}


export default UserCard;
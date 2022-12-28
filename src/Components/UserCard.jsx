import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class UserCard extends Component {
    state = {expandIcon : "fa-solid fa-chevron-down",hidden : true}
    
    cls = this.props.user.icon == null ? "fa-regular fa-circle-user fa-lg" : this.props.user.icon;
    handleExpand = ()=> {
        if (this.state.expandIcon == "fa-solid fa-chevron-down") {this.setState({expandIcon : "fa-solid fa-chevron-up",hidden : false})}
        else { this.setState({expandIcon :"fa-solid fa-chevron-down",hidden : true })}
    }
    render() { 
        
        return (
        <div className="static">
        <div className="flex  justify-between space-x-3 w-64 items-center border-gray-100 bg-white  rounded-lg h-11 px-4 ">
            <i className={this.cls}></i>
            <h3 className="font-medium"> {this.props.user.name}</h3>
            <button  onClick={this.handleExpand} >
                <i className={this.state.expandIcon}></i>
            </button>
        </div>
        {this.state.hidden == false ? 
        <div className=" p-3 pt-6 grid grid-cols-1 justify-items-start absolute rounded mt-2 h-56 w-64 bg-white shadow-lg border-solid border-gray-300 border-2">
            <div>
            <Link  to="/AddSection" className="text-sm">
            <i className="fa-solid fa-plus px-4"></i>
            Ajouter une annonce
            </Link>
            </div>
           <div className="w-full  h-0.5 bg-black"></div>
           <div>
           <Link  to="/MyAds" className="text-sm">
           <i className="fa-regular fa-window-restore px-4"></i>
           Mes annonces
            </Link>
            </div>
            <div className="w-full  h-0.5 bg-black"></div>
           <div> 
           <Link to="/" className="text-sm">
           <i class="fa-solid fa-arrow-right-from-bracket px-4"></i>
           Log out
           </Link>
           </div>
          

        </div> : null}

        </div>
        
        );
        
    }
}


export default UserCard;
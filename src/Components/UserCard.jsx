import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../DetailedAnnounce.css'


class UserCard extends Component {
    state = {expandIcon : "fa-solid fa-chevron-down",hidden : true}
    
    cls = this.props.user.icon == null ? "fa-regular fa-circle-user fa-lg color-white" : this.props.user.icon;
    handleExpand = ()=> {
        if (this.state.expandIcon == "fa-solid fa-chevron-down") {this.setState({expandIcon : "fa-solid fa-chevron-up",hidden : false})}
        else { this.setState({expandIcon :"fa-solid fa-chevron-down",hidden : true })}
    }
    render() { 
        
        return (
        <div className="static">
        <div onClick={this.handleExpand} className="flex  justify-between space-x-3 md:w-64 w-50 items-center h-11 px-4 md:px-[20%] cursor-pointer">
            <div class="flex items-center space-x-2">
                <i className={this.cls}></i>
                <h3 className="font-medium text-[#160042]"> {this.props.user.name}</h3>
            </div>
            <button   >
                <i className={this.state.expandIcon}></i>
            </button>
        </div>
        {this.state.hidden == false ? 
        <div className=" p-3 pt-6 grid grid-cols-1 justify-items-start absolute rounded-[13px] mt-2 h-56 md:w-64 w-45 bg-white shadow-lg  border-gray-100 border-[0.5px] shadow-[10px_5px_35px_10px_rgba(200,200,241,0.2)]">
            <div>
            <Link  to="/AddSection" className="md:text-sm text-[11px] hover:text-[#4285f4] ">
            <i className="fa-solid fa-plus md:px-4 px-2"></i>
            Ajouter une annonce
            </Link>
            </div>
           <div className="w-full  h-0.5 bg-black"></div>
           <div>
           <Link  to="/MyAds" className="md:text-sm text-[11px] hover:text-[#4285f4]">
           <i className="fa-regular fa-window-restore md:px-4 px-2"></i>
           Mes annonces
            </Link>
            </div>
            <div className="w-full  h-0.5 bg-black"></div>
           <div> 
           <Link to="/" className="md:text-sm text-[11px] hover:text-[#4285f4]">
           <i class="fa-solid fa-arrow-right-from-bracket md:px-4 px-2"></i>
           Log out
           </Link>
           </div>
          

        </div> : null}

        </div>
        
        );
        
    }
}


export default UserCard;
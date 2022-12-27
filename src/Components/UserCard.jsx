import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class UserCard extends Component {
    state = {expandIcon : "fa-solid fa-chevron-down",hidden : true}
    
    cls = this.props.user.icon == null ? "fa-regular fa-circle-user fa-lg" : this.props.user.icon;
    handleExpand = ()=> {
        if (this.state.expandIcon === "fa-solid fa-chevron-down") {this.setState({expandIcon : "fa-solid fa-chevron-up",hidden : false})}
        else { this.setState({expandIcon :"fa-solid fa-chevron-down",hidden : true })}
    }
    render() { 
        
        return (
        <div className="static md:mr-auto ">
        <div   onClick={this.handleExpand} className="flex  cursor-pointer place-items-center space-x-[10px] md:w-64 w-50 items-center border-gray-100 bg-white  h-11  ">
            <i className={this.cls}></i>
            <h3 className="font-medium mt-[2px]" > {this.props.user.name}</h3>
            <button >
                <i className={this.state.expandIcon}></i>
            </button>
        </div>
        {this.state.hidden === false ? 
        <div className=" p-3 pt-6 grid grid-cols-1 justify-items-start absolute rounded-[20px] mt-2 h-56 md:w-64 w-45 bg-white border-gray-100 shadow-[10px_5px_35px_10px_rgba(200,200,241,0.2)] border-[0.5px]">
            <div>
            <Link  to="/AddSection" className="text-sm">
            <i className="fa-solid fa-plus md:px-4 px-2"></i>
                Ajouter une annonce
            </Link>
            </div>
           <div className="w-full  h-0.5 bg-black"></div>
           <div>
           <Link  to="/" className="text-sm">
           <i className="fa-regular fa-window-restore md:px-4 px-2"></i>
           Mes annonces
            </Link>
            </div>
            <div className="w-full h-0.5 bg-black"></div>
           <div> 
           <Link to="/" className="text-sm">
            <i className="fa-regular fa-bookmark md:px-3 px-2 "></i>
            Annonces enregistrées
           </Link>
           </div>
          

        </div> : null}

        </div>
        
        );
        
    }
}


export default UserCard;
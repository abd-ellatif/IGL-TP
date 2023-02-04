import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../DetailedAnnounce.css'


class AdminCard extends Component {
    state = {expandIcon : "fa-solid fa-chevron-down",hidden : true}
    
    cls = "fa-regular fa-circle-user fa-lg" ;
    handleExpand = ()=> {
        if (this.state.expandIcon == "fa-solid fa-chevron-down") {this.setState({expandIcon : "fa-solid fa-chevron-up",hidden : false})}
        else { this.setState({expandIcon :"fa-solid fa-chevron-down",hidden : true })}
    }
    render() { 
        
        return (
        <div className="static">
        <div onClick={this.handleExpand}  className="flex  justify-between cursor-pointer space-x-3 md:w-64 w-50 items-center text-white h-11 px-4 md:px-[20%] ">
            <i className={this.cls}></i>
            <h3 className="font-medium text-white"> Admin </h3>
            <button  >
                <i className={this.state.expandIcon}></i>
            </button>
        </div>
        {this.state.hidden === false ? 
        <div className="p-3 pt-6 grid grid-cols-1 justify-items-start absolute rounded-[13px] mt-2 h-56 md:w-64 w-45 bg-white shadow-lg  border-gray-100 border-[0.5px] shadow-[10px_5px_35px_10px_rgba(200,200,241,0.2)]">
            <div onClick={()=>window.location.reload()}>
            <Link  to="" className="md:text-sm text-[11px] hover:text-[#4285f4]">
            <i className="fa-solid fa-bullhorn md:px-4 px-2"></i>
            Voir toutes les annonces
            </Link>
            </div>
           <div className="w-full  h-0.5 bg-black"></div>
           <div onClick={()=>window.location.reload()}>
           <Link  to="WebScraping" className="md:text-sm text-[11px] hover:text-[#4285f4]">
           <i className="fa-solid fa-globe md:px-4 px-2"></i>
            Web-Scraping
            </Link>
            </div>

            <div className="w-full  h-0.5 bg-black"></div>
           <div onClick={()=>window.location.reload()}> 
           <Link to="ReportedAds" className="md:text-sm text-[11px] hover:text-[#4285f4]">
           <i className="fa-solid fa-window-restore md:px-4 px-2"></i>
           Annonces Signalés
           </Link>
           </div>
            <div className="w-full  h-0.5 bg-black"></div>
           <div onClick={()=>window.location.reload()}> 
           <Link to="" className="md:text-sm text-[11px]">
           <i className="fa-solid fa-arrow-right-from-bracket md:px-4 px-2"></i>
           Se déconnecter
           </Link>
           </div>
          

        </div> : null}

        </div>
        
        );
        
    }
}


export default AdminCard;
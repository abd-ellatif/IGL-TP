import React, { Component } from 'react'
import AnnonceCard from './AnnonceCard';
import DetailedAnnonce from './DetailedAnnonce';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';




class AnnoncesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { searchValue : "" } 
      }

    handleValueChange = (event) =>{
        this.setState({searchValue: event.target.value});
    }

    handleSearchClicked = ()=>{
        alert("Search Clicked");
    }
    render() { 
        return (<div className="flex flex-col place-items-center w-full h-screen bg-[#f8f8f8] ">
                <SearchBox searchValue={this.state.searchValue}  handleChange={this.handleValueChange} handleSearch ={this.handleSearchClicked}></SearchBox>
                <div className="mt-10 w-8 h-8 grid grid-cols-2 bg-blue-200">
                    <button><Link to="/AnnonceDet">Here</Link></button>
                </div>
                
                </div>);
    }
}
export default AnnoncesContainer;
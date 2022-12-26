import React, { Component } from 'react'
import SearchBox from './SearchBox';

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
        return (<div className="flex flex-col place-items-center w-full h-screen bg-gray-100">
                <SearchBox searchValue={this.state.searchValue}  handleChange={this.handleValueChange} handleSearch ={this.handleSearchClicked}></SearchBox>
                <div className="mt-10 w-8 h-8 grid grid-cols-2 bg-blue-200">
                </div>
                </div>);
    }
}
 
export default AnnoncesContainer;
import React, { Component } from 'react'


class SearchBox extends Component {
    state = {  } 
    render() { 
        return (

<form className="mt-10 md:mt-4 md:w-full  max-w-sm w-[300px]">
  <div className="flex items-center bg-white rounded-[16px]  px-2 py-2">
    <input className="md:text-[16px] text-[13px] appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Rechercher une annonce..." value={this.props.searchValue} onChange={this.props.handleChange}/>
    <button onClick={this.props.handleSearch} className=" mx-2 flex-shrink-0 bg-blue-400  text-sm text-white py-1 px-2 rounded" type="button">
    <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</form>

        );
    }
}
 
export default SearchBox;
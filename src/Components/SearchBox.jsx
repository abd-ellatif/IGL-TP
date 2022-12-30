import React, { Component } from 'react'


class SearchBox extends Component {
    state = {  } 
    render() { 
        return (

<form className="mt-5 md:mt-4 md:w-full  max-w-sm w-[300px]">
  <div className="flex items-center bg-white rounded-[20px] border-[0.5px] border-gray-100 h-[50px] px-2 py-2 ">
    <input className=" appearance-none border-transparent rounded-[13px]  w-full text-gray-700 leading-tight text-sm" type="text" placeholder="Rechercher une annonce..." value={this.props.searchValue} onChange={this.props.handleChange}/>
    <button onClick={this.props.handleSearch} className=" mx-2 flex-shrink-0 bg-blue-400  text-sm text-white py-1 px-2 rounded" type="button">
    <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</form>

        );
    }
}
 
export default SearchBox;
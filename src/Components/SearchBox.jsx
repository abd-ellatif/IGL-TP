import React, { Component } from 'react'


class SearchBox extends Component {
    state = {  } 
    render() { 
        return (

<form className="mt-4 w-full max-w-sm">
  <div className="flex items-center bg-white rounded  py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Rechercher..." value={this.props.searchValue} onChange={this.props.handleChange}/>
    <button onClick={this.props.handleSearch} className=" mx-2 flex-shrink-0 bg-blue-400  text-sm text-white py-1 px-2 rounded" type="button">
    <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</form>

        );
    }
}
 
export default SearchBox;
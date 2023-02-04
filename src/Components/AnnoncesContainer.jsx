import React, { Component } from 'react'
import AnnonceCard from './AnnonceCard';
import DetailedAnnonce from './DetailedAnnonce';
import SearchBox from './SearchBox';
import FilterSection from './Filter.jsx'
import userEvent from '@testing-library/user-event';

let ad = {nom : 'Apartement F3 Zeralda',
          location: 'Zeralda',
          prix: '60.000.000 DA'};

class AnnoncesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { searchValue : "",annonces:[] ,wilaya: '',commune: ''} 

      fetch("http://127.0.0.1:8000/ai_list", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({annonces : data})
      })
      .catch((err) => {
        console.log(err.message);
      });
      }

    handleValueChange = (event) =>{
        this.setState({searchValue: event.target.value});
    }


    handleSearchClicked = ()=>{
        alert("Search Clicked");
    }

    componentDidMount(){
        console.log(this.state)      
    }

    handleFilterChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value})
    }


    render() { 
        return (
            <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 h-full">
                <FilterSection handleFilterChange={this.handleFilterChange}></FilterSection>
            <div className="lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-2 flex flex-col gap-4  place-items-center w-full h-screen bg-[#f1f1f1] pl-[1%]">
                <SearchBox searchValue={this.state.searchValue}  handleChange={this.handleValueChange} handleSearch ={this.handleSearchClicked}></SearchBox>
               
                <div   className=" h-screen   flex  flex-wrap  gap-5  overflow-y-auto overflow-x-auto">
                    {
                        this.state.annonces.map((annonce)=>{


                                if (this.props.admin === false) {
                                    return <AnnonceCard annonce={annonce} admin={false} user={this.props.user}></AnnonceCard>
                                }else {
                                    return <AnnonceCard annonce={annonce} admin={true} ></AnnonceCard>
                                }
                            
                        })
                    }            
                </div>
                </div>
            </div>);
    }
}
export default AnnoncesContainer;
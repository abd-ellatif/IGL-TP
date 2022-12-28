import React, { Component } from 'react'
import AnnonceCard from './AnnonceCard';
import DetailedAnnonce from './DetailedAnnonce';
import SearchBox from './SearchBox';


let ad = {nom : 'Apartement F3 Zeralda',
          location: 'Zeralda',
          prix: '60.000.000 DA'};

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
        return (<div className="flex flex-col gap-4  place-items-center w-full h-screen bg-gray-100">
              
                <SearchBox searchValue={this.state.searchValue}  handleChange={this.handleValueChange} handleSearch ={this.handleSearchClicked}></SearchBox>
               
                <div   className=" h-screen   flex  flex-wrap  gap-8 overflow-y-auto overflow-x-auto">
                    {
                        this.props.annonces.map((annonce)=>{
                            if (this.props.admin == false) {
                                
                            }else {
                                return <AnnonceCard annonce={annonce} admin={true} ></AnnonceCard>
                            }
                            
                        })
                    }            
                </div>
                
                </div>);
    }
}
export default AnnoncesContainer;
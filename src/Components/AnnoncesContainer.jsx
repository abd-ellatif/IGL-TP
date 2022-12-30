import React, { Component } from 'react'
import AnnonceCard from './AnnonceCard';
import DetailedAnnonce from './DetailedAnnonce';
import SearchBox from './SearchBox';
import TempFilterSection from './Filter.jsx'

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
        return (
            <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 h-full">
                <TempFilterSection></TempFilterSection>
            <div className="lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-2 flex flex-col gap-4  place-items-center w-full h-screen bg-[#f1f1f1] pl-[1%]">
                <SearchBox searchValue={this.state.searchValue}  handleChange={this.handleValueChange} handleSearch ={this.handleSearchClicked}></SearchBox>
               
                <div   className=" h-screen   flex  flex-wrap  gap-5  overflow-y-auto overflow-x-auto">
                    {
                        this.props.annonces.map((annonce)=>{
                            if (this.props.admin === false) {
                                return <AnnonceCard annonce={annonce} admin={false} ></AnnonceCard>
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
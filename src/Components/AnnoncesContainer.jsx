import React, { Component } from 'react'
import AnnonceCard from './AnnonceCard';
import DetailedAnnonce from './DetailedAnnonce';
import SearchBox from './SearchBox';
import FilterSection from './Filter.jsx'


class AnnoncesContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = { searchValue : "",annonces:[] ,wilaya: '',commune: '',list:[]} 

      fetch("http://127.0.0.1:8000/ai_list", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({annonces : data})
        this.setState({list : data})
      })
      .catch((err) => {
        console.log(err.message);
      });
      }

    handleValueChange = (event) =>{
        this.setState({searchValue: event.target.value});
        console.log('State of search: '+this.state.searchValue)

        // Declare variables
        var filter, ul, li, i, txtValue;
     
        filter = document.getElementById("searchBox").value.toUpperCase();
        ul = document.getElementById("AisUl");
        li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          txtValue = this.state.list[i].titre;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }

        if(this.state.searchValue =''){
            for (i = 0; i < li.length; i++) {
                  li[i].style.display = "";        
              }
        }
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
        value == 'Choisir une wilaya' ? this.setState({['wilaya']:'',['commune']:''}) :this.setState({[name]:value});
    }

    handleFilterClick = ()=> {

        this.state.list = this.state.annonces.filter((annonce)=>{
            if (this.state.wilaya == '' && this.state.commune =='') return true;
            else if(this.state.commune =='')
            {
                return (annonce.location.split('-')[0] == this.state.wilaya)
            }
            else {
                return (annonce.location.split('-')[0]==this.state.wilaya && annonce.location.split('-')[1]==this.state.commune)
            }
        }) 

        this.setState({list : this.state.list})
    }
    handleSearchChanged = () => {
        
      }

    render() { 
        return (
            <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 h-full">
                <FilterSection handleFilterChange={this.handleFilterChange} handleFilterClick={this.handleFilterClick}></FilterSection>
                
            <div className="lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-2 flex flex-col gap-4  place-items-center w-full h-screen bg-[#f1f1f1] pl-[1%]">
                <SearchBox searchValue={this.state.searchValue}  handleChange={this.handleValueChange} handleSearch ={this.handleSearchClicked} ></SearchBox>
               
                <div   className=" h-screen   flex  flex-wrap  gap-5  overflow-y-auto overflow-x-auto">
                    <ul id='AisUl' className=" h-screen   flex  flex-wrap  gap-5  overflow-y-auto overflow-x-auto">

                    {
                        this.state.list.map((annonce)=>{


                                if (this.props.admin === false) {
                                    return <li> <AnnonceCard annonce={annonce} admin={false} user={this.props.user}></AnnonceCard> </li>
                                }else {
                                    return <li> <AnnonceCard annonce={annonce} admin={true} ></AnnonceCard> </li>
                                }
                            
                        })
                    }            

                    </ul>
                   
                </div>
                </div>
            </div>);
    }
}
export default AnnoncesContainer;
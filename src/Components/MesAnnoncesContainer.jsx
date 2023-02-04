import { Component } from "react";
import AnnonceCard from "./AnnonceCard";



class MesAnnoncesContainer extends Component{

    constructor(props){
      super(props);
      this.state = { searchValue : "",annonces:[] } 
      const id = JSON.parse(localStorage.getItem('user-state')).id;

      fetch("http://127.0.0.1:8000/mes_ai", {
      method: "POST",
      
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body:JSON.stringify({id:id})
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({annonces : data})
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    
    componentDidMount(){
        
    }

    render(){
    return (
        <div className="flex flex-col gap-4  place-items-center w-full h-screen bg-gray-100 ">

                <h1 className="text-[#160042] text-4xl font-semibold py-2 "> MES ANNONCES</h1>               
                <div   className=" h-screen  my-4 flex  flex-wrap  gap-8 overflow-y-auto overflow-x-auto pl-[5%] md:pl-[20%] lg:pl-[10%]">
                    {
                        this.state.annonces.map((annonce)=>{
                            console.log(annonce)
                            return <AnnonceCard annonce={annonce} admin={true} user={this.props.user}></AnnonceCard>
                        })
                    }            
                </div>
                
                </div>
        
    ); }

}

export default MesAnnoncesContainer;
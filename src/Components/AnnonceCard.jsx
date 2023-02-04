import DetailedAnnonce from "./DetailedAnnonce";
import { useState } from "react";
import Button from "./Button";

function AnnonceCard(props) {

   const [popUpActive, setPopUpActive] = useState(false);

   const handleClick =()=> {
       setPopUpActive(!popUpActive);
   }

   const handleDelete = () =>{
    alert('Annonce supprimée')
    
   fetch("http://127.0.0.1:8000/ai_delete", {
        method: "POST",
        body:JSON.stringify({id:props.annonce.id}),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((data) => {
          //
        })
        .catch((err) => {
          console.log(err.message);
        }); 

        window.location.reload();
   }


    return(
        <div className="static space-y-2">
            <div className="grid grid-cols-1 h-[280px] w-[350px] md:h-[250px] md:w-[320px] justify-items-center items-center bg-[#fff] rounded-[8px] cursor-pointer shadow-[5px_5px_10px_0px_rgba(200,200,150,0.2)]" onClick={handleClick} >
            <div className="h-[180px] w-[93%] mt-[0.5%] bg-[#fafafa] rounded-[8px] bg-center  bg-cover" style={{ backgroundImage: `url('https://img.hwnstatic.com/500/350/80/false/hS6xM66VW7aNaENID2Tg7d19G6qdXpjnewxnKUfqbvlQ6ej8o:v5OGtc4T7tox5PKrWFnQWSoktVUZAXRE5tZYkscSw4dvnT0JiQ:ls1KSDUb0P:RQ__')` }}>
                
            </div>
        <div className="h-12 w-[89%]">
            <h4 className="font-medium text-sm text-[#160042]"> {props.annonce.titre}</h4>
            <div className="flex justify-between">
                <h6 className="text-[#AFAFAF] text-sm">{props.annonce.location}</h6>
                <h6 className="text-green-400 text-sm font-bold">{props.annonce.price}</h6>
               
            </div>
        </div>
       

    </div>

    {props.admin ? <button onClick={handleDelete} className='bg-blue-400 rounded p-3'> Supprimer </button>: null}
    
    {props.saved ? <Button bgColor='bg-[#160042]' > Supprimer des favoris</Button>: null}
    <div className="absolute top-20 left-1/4"> 
    {popUpActive ? <DetailedAnnonce handleClick = {handleClick} admin={props.admin} saved={props.saved} annonce={props.annonce} user={props.user}></DetailedAnnonce> : null}
    </div> 
    
   
     </div>
    );
}

export default AnnonceCard;
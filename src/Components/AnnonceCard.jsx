import DetailedAnnonce from "./DetailedAnnonce";
import { useState } from "react";

function AnnonceCard(props) {

   const [popUpActive, setPopUpActive] = useState(false);

   const handleClick =()=> {
       setPopUpActive(!popUpActive);
   }


    return(
        <div className="static">
            <div className="grid grid-cols-1 h-60 w-[330px] justify-items-center items-center bg-white rounded cursor-pointer " onClick={handleClick}>
        <div className="h-44 w-80 bg-gray-400 rounded">
        </div>
        <div className="h-12 w-80">
            <h4 className="font-medium"> {props.annonce.nom}</h4>
            <div className="flex justify-between">
                <h6 className="text-gray-500">{props.annonce.location}</h6>
                <h6 className="text-green-400">{props.annonce.prix}</h6>
            </div>
        </div>
       

    </div>
    <div className="absolute top-20 left-1/4">
    {popUpActive ? <DetailedAnnonce handleClick = {handleClick}></DetailedAnnonce> : null}
    </div>
    
   
     </div>
    );
}

export default AnnonceCard;
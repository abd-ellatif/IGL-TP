//import { Navbar } from '@material-tailwind/react';
import React , {useState} from 'react'
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import '../DetailedAnnounce.css'
import { useEffect } from 'react';
import Map from './Map';

const DetailedAnnonce = (props) => {
    const [message,setMessage] = useState('')
    const [iconCol,setIconCol]= useState("none");
    const [iconStroke,setIconStroke]= useState("#160042");

    
    //const[setDescription,setType,setCat,setSurface,setAdresse,setUtil,setAdrUtil,setTitre,setNomUtil,setNulTel,setMail] = useState();
    const[typeAnnonce] = useState(props.annonce.type);
    const[categorie]=useState(props.annonce.category);
    const[surface]=useState(props.annonce.surface);
    const[adresse]=useState(props.annonce.location);
    const[titreAnnonce]=useState(props.annonce.titre);
    const[nomUtil,setUser]= useState(props.annonce.owner.nom);
    const[numTel,setTlphn]=useState(props.annonce.owner.telephone);
    const[adresseUtil,setAdr]=useState(props.annonce.owner.adresse);
    const[mailUtil,setMailUser]=useState(props.annonce.owner.email);
    const[description]=useState(props.annonce.description); 
    const[IdDest,setIdDest]=useState(props.annonce.owner.id);



    //Fetching owner data
    useEffect(() => {
        fetch("http://127.0.0.1:8000/user", {
            method: "POST",
            body: JSON.stringify({owner:props.annonce.owner}),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .then((data) => {
              setUser(data.nom+' '+data.prenom)
              setTlphn(data.telephone)
              setAdr(data.adresse)
              setMailUser(data.email)
              setIdDest(data.id)
            })
            .catch((err) => {
              console.log(err.message);
            });
      });

      const handleMessage = ()=>{
  

        fetch("http://127.0.0.1:8000/message_create", {
            method: "POST",
            body: JSON.stringify({content:message,utilisateur:props.user.id,destination:IdDest}),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .then((data) => {
                //
            })
            .catch((err) => {
              console.log(err.message);
            }); 
      }


      const handleMsgChange=(e) => {
        setMessage(e.target.value);
      }
    
  return (
    <div>
        <div className='DetailedAnnounce lg:ml-[-23%] grid-cols-1 gap-6 md:grid md:grid-cols-2  md-[800px] lg:w-[1000px] md:h-full md:mt-[-10px] md:ml-[-22%] z-50 bg-white rounded-[20px] font-poppins shadow-[10px_5px_35px_10px_rgba(9,0,0,0.2)] relative z-1 w-[110%] sm:mt-[-90%] ml-[-25%]'>
                <div className="md:col-span-1">
                    <div className='lg:ml-[960px] md:ml-[200%] relative z-1 md:mt-auto mt-[500px] mt-2 md:mb-[-20px] mb-[-30px] cursor-pointer'>
                        <svg onClick={props.handleClick} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#4285f4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </div>
                    <h1 className="text-[#160042] font-poppins text-[23px] pt-5 pl-6 pb-2 font-bold">{titreAnnonce}</h1>
                    <h2 className="text-gray-400 pl-6 text-[14px]">Publié par <span className="text-[#4285f4] underline">{nomUtil}</span></h2>
                    <div className='pl-6 space-y-1 pt-1 text-[14px]'>
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#160042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <h3 className='text-["#160042]'>{numTel}</h3>
                        </div>
                        <div className="flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#160042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <h3 className='text-["#160042]'>{mailUtil}</h3>
                        </div>
                        <div className="flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#160042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                            <h3 className='text-["#160042]'>{adresseUtil}</h3>
                        </div>
                        
                    </div>
                    <div className=" pl-10"><Carousel/></div>
                    <div className='pl-6 mt-[-20px] text-[14px]'>
                        <h3 className="text-[#4285f4] ">Type : <span className="text-[#160042]">{typeAnnonce}</span></h3>
                        <h2 className="text-[#4285f4] ">Catégorie : <span className="text-[#160042]">{categorie}</span></h2>
                        <h2 className="text-[#4285f4] ">Surface : <span className="text-[#160042]">{surface}</span></h2>
                        <h2 className="text-[#4285f4] ">Adresse : <span className="text-[#160042]">{adresse}</span></h2>
                        <h2 className="text-[#4285f4] mb-2 ">Description : <span className="text-[#160042]">{description}</span></h2>
                    </div>
                   
                        
                        {!props.admin ? <div className=" flex space-x-[60px] pl-10 mr-5 items-center pt-6 text-[14px] pb-[20px]">
                        {(props.user.id == props.annonce.owner)? null :  <button className="bg-[#4285F4] w-[215px] h-[44px] text-[16px] rounded-md  p-3 text-white" onClick={handleMessage}>Envoyer un message</button>}
                       
                       
                        
                    
                    </div>: null}
                </div>
                <div className=" h-[500px] md:h-full  border-8 border-white md:col-span-1  rounded-[20px]">          
                    <Map location={props.annonce.location.split('-')[1]}> </Map>
                </div>

                {(props.user.id == props.annonce.owner)? null :  <input className='p-4 rounded-lg' name='Message' placeholder='Ecrire le message ici' onChange={handleMsgChange}></input>}
               
                
            </div>
    </div>
            
        
    
  )
}

export default DetailedAnnonce;
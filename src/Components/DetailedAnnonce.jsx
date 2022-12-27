//import { Navbar } from '@material-tailwind/react';
import React , {useState} from 'react'
import Carousel from './Carousel';
import { Link } from 'react-router-dom';


const DetailedAnnonce = () => {
    const [buttonText,setButtonText]= useState('Ajouter aux favoris');
    function handleClick(){
        setButtonText('Ajouté ! ')
    }
    //const[setDescription,setType,setCat,setSurface,setAdresse,setUtil,setAdrUtil,setTitre,setNomUtil,setNulTel,setMail] = useState();
    const[typeAnnonce] = useState('Appartement');
    const[categorie]=useState('Location');
    const[surface]=useState('63m²');
    const[adresse]=useState('Cartier Résidentiel, Zéralda, Alger');
    const[titreAnnonce]=useState('Appartement F3 Zéralda');
    const[nomUtil]= useState('Mohamed Mohamed');
    const[numTel]=useState('+213559301396');
    const[adresseUtil]=useState('Rue N°5 Rouiba');
    const[mailUtil]=useState('mail_mail08@gmail.com');
    const[description]=useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam suscipit eveniet voluptate eaque distinctio assumenda labore porro, fugit aliquam repellendus consequuntur, veniam quidem beatae voluptatibus aliquid blanditiis? Maxime, hic velit.'); 
  return (
    <div>
        
        <div className='md:mt-auto mt-[-220px] grid-cols-1 gap-6 md:grid md:grid-cols-2  md-[800px] lg:w-[1050px] md:h-full md:mt-[-10px] md:ml-[-100px] z-50 bg-white rounded-[20px] font-poppins shadow-[10px_5px_35px_10px_rgba(9,0,0,0.2)] relative z-1 w-[95%] ml-[7px]'>
                <div className="md:col-span-1">
                    <div className='lg:ml-[1000px] md:ml-[700px] relative z-1 md:mt-auto mt-[500px] mt-2 md:mb-[-20px] mb-[-30px] '>
                        <button><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#4285f4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></Link></button>
                    </div>
                    <h1 class="text-[#160042] font-poppins text-[23px] pt-5 pl-6 pb-2 font-bold">{titreAnnonce}</h1>
                    <h2 class="text-gray-400 pl-6 text-[14px]">Publié par <span class="text-[#4285f4] underline">{nomUtil}</span></h2>
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
                    <div class=" pl-10"><Carousel/></div>
                    <div className='pl-6 mt-[-20px] text-[14px]'>
                        <h3 class="text-[#4285f4] ">Type : <span class="text-[#160042]">{typeAnnonce}</span></h3>
                        <h2 class="text-[#4285f4] ">Catégorie : <span class="text-[#160042]">{categorie}</span></h2>
                        <h2 class="text-[#4285f4] ">Surface : <span class="text-[#160042]">{surface}</span></h2>
                        <h2 class="text-[#4285f4] ">Adresse : <span class="text-[#160042]">{adresse}</span></h2>
                        <h2 class="text-[#4285f4] ">Description : <span class="text-[#160042]">{description}</span></h2>
                    </div>
                    <div class=" flex md:space-x-[40px] space-x-1 pl-10 mr-5 items-center pt-8 pb-3 text-[14px]">
                        <button className='flex space-x-1 w-[200px] items-center' onClick={handleClick}>
                            <svg xmlnsXlink="https://www.w3.org/200/svg" width="22" height="22" viewBox="0 0 24 24 " fill="none" stroke="#160042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fillRule="evenodd" clipRule="evenodd" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                            <h2 class="font-bold text-[15px]] text-[#160042]">{buttonText}</h2>
                        </button>
                        <button class="bg-[#4285F4] lg:w-[215px] lg:h-[44px] w-[280px] h-[44px] text-center lg:text-[16px] text-[12px] rounded-md  p-3 text-white">Envoyer un message</button>
                    
                    </div>
                </div>
                <div class=" h-[500px] md:h-full border-8 border-white md:col-span-1 bg-gray-600 rounded-[20px]">          
                    <h1 class="mt-[75%] ml-[35%] text-white underline">google map here</h1>
                </div>
                
            </div>
    </div>
            
        
    
  )
}

export default DetailedAnnonce
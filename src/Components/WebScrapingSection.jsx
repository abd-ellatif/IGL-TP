import Button from './Button'
import { useState } from 'react';
import AnnonceCard from './AnnonceCard';

function WebScrapingSection(){

    const [list,setList] = useState([]);
    const handleSearch = function (e) {
        e.preventDefault();
        alert("Search Clicked");
    }
    return(<div className='flex flex-col place-items-center gap-20 justif-between p-20 '>
        <h1 className='text-[25px] md:text-5xl font-semibold text-[#160042] '>
         💻 WEB  <span className='text-[25px] md:text-5xl font-semibold text-[#4285f4]  '>SCRAPING</span>
        </h1>

        <form class="md:space-y-0 space-y-[20px]">
            <input className="rounded-lg border-gray-300" type="text" placeholder="Entrer URL" />
            <Button bgColor='bg-blue-500' handleClick={handleSearch}>
                Rechercher des annonces
            </Button>
        </form>

        <div className="flex flex-col gap-4  place-items-center w-full h-screen rounded  bg-gray-100">
                
                <div   className=" h-screen   flex  flex-wrap  gap-8 overflow-y-auto overflow-x-auto">
                    {
                          list.map((annonce)=>{
                            <AnnonceCard annonce={annonce}></AnnonceCard>
                        })
                    }            
                </div>
                
                </div>
    
       <Button bgColor='bg-blue-500'> Ajouter ces annonces</Button>
      
    </div>);
}



export default WebScrapingSection;
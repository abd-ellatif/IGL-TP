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
        <h1 className='text-4xl font-semibold text-blue-500 '>
            Web Scraping
        </h1>

        <form>
            <input className="rounded-lg" type="text" placeholder="Enter URL" />
            <Button bgColor='bg-blue-500' handleClick={handleSearch}>
                Rechercher annonces immobilières
            </Button>
        </form>

        <div className="flex flex-col gap-4  place-items-center w-full h-full rounded  bg-gray-100">
                
                <div   className=" h-screen   flex  flex-wrap  gap-8 overflow-y-auto overflow-x-auto">
                    {
                          list.map((annonce)=>{
                            <AnnonceCard annonce={annonce}></AnnonceCard>
                        })
                    }            
                </div>
                
                </div>

      
    </div>);
}



export default WebScrapingSection;
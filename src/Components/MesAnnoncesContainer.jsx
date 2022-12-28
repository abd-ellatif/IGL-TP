import AnnonceCard from "./AnnonceCard";



function MesAnnoncesContainer(props){



    return (
        <div className="flex flex-col gap-4  place-items-center w-full h-screen bg-gray-100">


                <h1 className="text-blue-500 text-4xl font-semibold py-2">Mes Annonces</h1>               
                <div   className=" h-screen  my-4 flex  flex-wrap  gap-8 overflow-y-auto overflow-x-auto">
                    {
                        props.annonces.map((annonce)=>{
                            return <AnnonceCard annonce={annonce}></AnnonceCard>
                        })
                    }            
                </div>
                
                </div>
        
    );
}

export default MesAnnoncesContainer;
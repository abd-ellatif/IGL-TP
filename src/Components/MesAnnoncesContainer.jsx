import AnnonceCard from "./AnnonceCard";



function MesAnnoncesContainer(props){



    return (
        <div className="flex flex-col gap-4  place-items-center w-full h-screen bg-gray-100 ">

                <h1 className="text-[#160042] text-4xl font-semibold py-2 "> MES ANNONCES</h1>               
                <div   className=" h-screen  my-4 flex  flex-wrap  gap-8 overflow-y-auto overflow-x-auto pl-[5%] md:pl-[20%] lg:pl-[10%]">
                    {
                        props.annonces.map((annonce)=>{
                            return <AnnonceCard annonce={annonce} admin={true}></AnnonceCard>
                        })
                    }            
                </div>
                
                </div>
        
    );
}

export default MesAnnoncesContainer;
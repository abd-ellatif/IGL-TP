import React, { Component } from 'react';
import {useState} from 'react'
import { useEffect } from 'react';
import Inbox from '../assets/inbox.svg';
import '../DetailedAnnounce.css'
function Messagerie(props) {
    const[msg,setMsg] = useState(false);
    const[info,setInfo] = useState("");
    const[mesgUtil,setMessage] = useState("");
    const[num,setNum] = useState("");
    const[adr,setAdr] = useState("");
    const[mail,setMail] = useState("");
    const[read,setRead] = useState(false);
    const[listMsg,setListMsg] = useState([])
    const[listSenders,setListSenders] = useState([])




    const handleSee = ()=>{
    console.log(listMsg)
    console.log(listSenders)}

    
    const handleMsg = () => {
      setMsg(true) 
    }


    function handelInfo (name,msg,num,adr,mail) {
      setInfo(name) 
      setMessage(msg)
      setNum(num);
      setAdr(adr);
      setMail(mail)
    }
    function handleRead (read) {
      setRead(read)
    }
    function handleReadMsg () {
      setRead(!read);
    }
      
   
    useEffect (
       async ()=>{
      const id = JSON.parse(localStorage.getItem('user-state')).id;

      await fetch("http://127.0.0.1:8000/message_list", {
      method: "POST",
      body:JSON.stringify({id:id}),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((response) => response.json())
      .then((data) => {
        setListMsg(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

       }
   ,[] )

   useEffect(()=>{
    listMsg.map((item)=>{
      fetch("http://127.0.0.1:8000/user", {
       method: "POST",
       body: JSON.stringify({owner:item.utilisateur}),
       headers: { "Content-type": "application/json; charset=UTF-8" },
     })
       .then((response) => response.json())
       .then((data) => {
         setListSenders((listSenders)=>{return [...listSenders,data]})
       })
       .catch((err) => {
         console.log(err.message);
       });
 })
   },[listMsg])

 
      
        return (
            <div className='Messagerie md:grid lg:grid-cols-5 md:grid-cols-3 h-screen bg-[#fafafa]'>
               <div id="utilisateurs" class="List md:col-start-1 md:col-span-1 lg:col-start-1 lg:col-span-1 bg-[#fff] border-r-2 border-gray-100 md:rounded-r-[30px] ">
                    <h1 class="text-[18px] text-[#160042] font-medium ml-8 mt-[20px]">Messagerie 👋🏻</h1>
                    <ul id="List" class="ml-[10%] space-y-3 pt-[20px]">
                        <div className='w-[90%] bg-gray-100 h-0.5 mt-3 mb-3 '></div>
                        {listSenders.map((item,index)=>(
                          
                            <div>
                                <div className='flex items-center space-x-5 cursor-pointer hover:text-[#4285f4] ' onClick={function(event){handleMsg();handleRead(true);handelInfo(item.nom+' '+item.prenom,listMsg[index].content,item.telephone,item.adresse,item.email)}}>
                                 <li class="fa-regular fa-user" ></li>
                                  <li class="text-[14px] active:font-bold focus:font-bold " >{item.nom+' '+item.prenom}</li>
                                  
                                </div>
                                <div className='w-[90%] bg-[#efefef] h-0.5 mt-3 mb-3 rounded-lg '></div>
                            </div>
                        ))}
                    </ul>
                </div> 
               <div className='block md:hidden mt-[-500px] cursor-pointer' onClick={handleReadMsg}>
                  {read ? <span class="text-[30px] "><i  class="fa-regular fa-circle-right"></i></span> : null} 
                </div>
                 <div class= {!read ? "md:hidden bg-[#fff] border-r-2 border-gray-100 " : "md:hidden fixed left-[-100%]"}>
                    <h1 class="text-[18px] text-[#160042] font-medium ml-8 mt-[20px]">Messagerie 👋🏻</h1>
                    <ul id="List" class="ml-[10%] space-y-3 pt-[20px]">
                        <div className='w-[90%] bg-gray-100 h-0.5 mt-3 mb-3 '></div>
                        {listSenders.map((item,index)=>(
                            <div>
                                <div className='flex items-center space-x-5 cursor-pointer hover:text-[#4285f4] ' onClick={function(event){handleMsg();handleRead(true);handelInfo(item.nom+' '+item.prenom,listMsg[index].content,item.telephone,item.adresse,item.email)}}>
                                 <li class="fa-regular fa-user" ></li>
                                 <div class="flex-row ">
                                  <li class="text-[14px] active:font-bold focus:font-bold " >{item.nom+' '+item.prenom}</li>
                                  <li class="text-[12px]">{item.telephone}</li>
                                 </div>
                                  
                                </div>
                                <div className='w-[90%] bg-[#efefef] h-0.5 mt-3 mb-3 rounded-lg '></div>
                            </div>
                        ))}
                    </ul>
                </div> 

                <div class="md:col-start-2 lg:col-span-3 md:col-span-1 mx-auto mt-[100px] "  >
                 {!msg ? 
                    <div class= " grid grid-cols-1 space-y-[-10px] ">
                    <img src={Inbox} alt="inbox" class = "w-[300px] h-[300px] mx-auto"/>
                    <h2 class="text-sm text-[#7ad9ff] mx-auto">Trouvez vos messages ici</h2>
                    </div> : 
                      <div class="space-y-[-18%] lg:space-y-[-8%]">
                          <div class="lg:ml-5 md:ml-2 ml-3">
                            <h2 class="text-sm text-gray-500 ml-2">{info}</h2>
                            <div class="lg:w-[500px] md:w-[290px] w-[340px] h-full bg-[#4285f4] p-5 rounded-[12px]">
                              <h2 class="text-sm text-white w-full">{mesgUtil}</h2>
                            </div>
                          </div>
                          <div class="flex justify-between items-center sticky h-screen">
                            <div class="h-0.5 lg:w-[210px] ml-5 bg-gray-200"></div>
                            <h2 class="lg:text-[12px] md:text-[11px] text-[11px] lg:ml-2 lg:mr-2 text-gray-400 lg:no-underline md:underline">Vous ne pouvez pas répondre à cette discussion</h2>
                            <div class="h-0.5 lg:w-[210px]  mr-5 bg-gray-200"></div>
                          </div>
                          
                      </div> 
                 
                         }
                </div>


                <div class="md:ml-[25%] lg:ml-0 lg:col-start-5 lg:col-span-1 md:col-span-1 border-l-2 border-gray-100 md:rounded-[30px] bg-white font-poppins"  >
                  {msg ? <div class="List">
                    <span class="text-[150px] md:ml-[15%] lg:ml-[20%]"><li class="fa-solid fa-circle-user" /></span>
                    <h1 class="font-medium text-[#4285f4] text-[17px] text-center mt-[-30px] underline">{info}</h1>
                    <div className="flex space-x-2 items-center mt-[30px] mb-[10px] md:ml-[15px] lg:ml-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#160042" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <h3 className=''>{num}</h3>
                    </div>
                    <div className="flex space-x-2 items-center mb-[10px] md:ml-[10px] lg:ml-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#160042" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <h3 className=''>{mail}</h3>
                    </div>
                    <div className="flex space-x-2 items-center mb-[10px] md:ml-[15px] lg:ml-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#160042" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                            <h3 className=''>{adr}</h3>
                    </div>
                  </div> : null}
                </div> 
                
            </div>
        );
    
}
 
export default Messagerie;
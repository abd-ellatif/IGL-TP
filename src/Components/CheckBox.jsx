import React from 'react'

const CheckBox = () => {
  return (
    
        <div class="space-y-3 ">
          <h3 className='font-poppins font-bold text-[#160042]'>Type</h3>
          <ul class="flex space-x-10 items-center">
                <li >
                  <div class="flex items-center ml-2">
                       <input id="default-checkbox" type="checkbox" value="" class="h-[16px] w-[16px] focus:ring-blue-500 bg-blue rounded-[4px]"/>
                       <label for="default-checkbox" class="ml-2 text-[13px] font-poppins font-medium text-[#160042] ">Tous</label>
                  </div>
                  
                </li>
                <li>
                <div class="flex items-center">
                       <input id="default-checkbox" type="checkbox" value="" class="h-[16px] w-[16px] focus:ring-blue-500 bg-blue rounded-[4px]"/>
                       <label for="default-checkbox" class="ml-2 text-[13px] font-poppins font-medium text-[#160042] ">Appartement</label>
                  </div>
                </li>
          </ul>
          <ul class="flex space-x-6 items-center ml-2">
                <li >
                <div class="flex items-center ">
                       <input id="default-checkbox" type="checkbox" value="" class="h-[16px] w-[16px] focus:ring-blue-500 bg-blue rounded-[4px]"/>
                       <label for="default-checkbox" class="ml-2 text-[13px] font-poppins font-medium text-[#160042] ">Terrain</label>
                  </div>
                  
                </li>
                <li>
                <div class="flex items-center ">
                       <input id="default-checkbox" type="checkbox" value="" class="h-[16px] w-[16px] focus:ring-blue-500 bg-blue rounded-[4px]"/>
                       <label for="default-checkbox" class="ml-2 text-[13px] font-poppins font-medium text-[#160042] ">Terrain Agricole</label>
                  </div>
                  
                </li>
          </ul>
          <ul class="flex space-x-6 items-center">
                <li >
                <div class="flex items-center ml-2">
                       <input id="default-checkbox" type="checkbox" value="" class="h-[16px] w-[16px] focus:ring-blue-500 bg-blue rounded-[4px]"/>
                       <label for="default-checkbox" class="ml-2 text-[13px] font-poppins font-medium text-[#160042] ">Maison</label>
                  </div>
                  
                </li>
                <li>
                  <div class="flex items-center ">
                       <input id="default-checkbox" type="checkbox" value="" class="h-[16px] w-[16px] focus:ring-blue-500 bg-blue rounded-[4px]"/>
                       <label for="default-checkbox" class="ml-2 text-[13px] font-poppins font-medium text-[#160042] ">Bungalow</label>
                  </div>
                  
                </li>
          </ul>
        </div>
   
  )
}

export default CheckBox
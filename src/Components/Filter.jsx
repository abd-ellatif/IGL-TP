import React , {useState} from 'react'
import CheckBox from './CheckBox'
import CountryStateCity from './CountryStateCity'
import DateRangePicker from './DateRangePicker'
import CloseIcon from "../assets/Close.svg"
import FiltreIcon from "../assets/filtre.svg"
import '../Filtre.css'

const Filter = () => {
  const[filter,setFilter] = useState(false)
  const handleFilter = () => {
    setFilter(!filter) 
  }
  return (
<div className="w-full h-screen postion-absolute bg-white">
        <div className='Filtre pl-3 space-x-3 space-y-5'>
          <p className='font-bold text-[#4285f4] font-poppins text-xl pt-2'>Filtrer</p>
          <CountryStateCity/>
          <CheckBox/>
          <DateRangePicker/>
        </div>
        <div onClick={handleFilter} className='block md:hidden mt-[-680px]  relative z-1'>
          {filter ? <img src={CloseIcon} alt="close"/> : <img src={FiltreIcon} alt="filtre"  />} 
        </div>
        <div className={filter ? 'FiltreMobile space-y-5 space-x-16 top-0 bg-white':'fixed left-[-100%]'}>
          <p className=' font-bold text-[#4285f4] font-poppins text-2xl ml-16 pt-2'>Filtrer</p>
          <CountryStateCity/>
          <CheckBox/>
          <DateRangePicker/>
        </div>
    </div>
    
  )
}

export default Filter;
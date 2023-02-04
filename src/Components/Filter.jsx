import React , {useState} from 'react'
import CheckBox from './CheckBox'
import CountryStateCity from './CountryStateCity'
import DateRangePicker from './DateRangePicker'
import CloseIcon from "../assets/Close.svg"
import FiltreIcon from "../assets/filtre.svg"
import '../Filtre.css'

const Filter = (props) => {
  const[filter,setFilter] = useState(false)
  const handleFilter = () => {
    setFilter(!filter) 
  }
  return (
    <div className="  w-full bg-white border-r-2 border-gray-200 md:shadow-lg">
        <div className='Filtre space-x-3 space-y-5 '>
          <p className='font-bold text-[#4285f4] font-poppins text-xl pt-5 ml-3'>Filtrer 🏡</p>
          <h3 className='font-poppins text-[#160042] font-medium'>Localisation</h3>
          <CountryStateCity handleFilterChange={props.handleFilterChange}/>
          <CheckBox/>
          <DateRangePicker/>
        </div>
    <div onClick={handleFilter} className='block md:hidden mt-[-710px] pl-[93%]   cursor-pointer  bg-[#f1f1f1]'>
          {filter ? <img src={CloseIcon} alt="close"/> : <img src={FiltreIcon} alt="filtre"  />} 
        </div>
        <div className={filter ? 'FiltreMobile space-y-5 space-x-16 rounded-[20px] border-[0.5px] w-[95%] ml-[2%] border-gray-100 shadow-[10px_5px_35px_10px_rgba(9,0,0,0.2)]  bg-white':'fixed left-[-100%]'}>
          <p className=' font-bold text-[#4285f4] font-poppins text-2xl ml-16 pt-2'>Filtrer</p>
          <CountryStateCity/>
          <CheckBox/>
          <div className={filter ? 'pb-[40px]':'fixed left-[-100%]'}>
            <DateRangePicker/>
          </div>
          
        </div>
    </div>
  )
}

export default Filter
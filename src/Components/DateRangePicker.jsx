import React , {useState} from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import {Calendar} from "react-modern-calendar-datepicker";
import '../Date.css'

const DateRangePicker = () => {
    const [selectedDayRange , setSelectedDayRange] = useState({
        from : null,
        to: null
    });
   
  return (
    <div className='font-poppins font-bold space-y-3  pb-[10px]'>
        <h3 className='font-poppins text-[#160042] w-full font-medium'>Dates de publication</h3>
        <div className='left-3'>
            <Calendar 
                value = {selectedDayRange}
                onChange={setSelectedDayRange}
                colorPrimary='#4285f4'
                colorPrimaryLight='rgba(75,207,250,0.4)'  
                calendarClassName="responsive-calendar" 
            />
        </div>
        
    </div>
    
   
   
  );
};
export default DateRangePicker 
import React from 'react'
import { Button } from '@/Components/ui/button';
const DoctorCard = ({Data}) => {
    console.log(Data);
  return (
    <div className='flex flex-col bg-blue-600 p-10' >

        <form className='bg-blue-200' action="">
        <input type="date" className='bg-[#172545] p-1 rounded-3xl h-8 outline-none rounded-r-none px-4' />
        <Button className="rounded-3xl rounded-l-none p-1 px-4 h-8" >Book</Button>
        </form>
        
    </div>
  )
}

export default DoctorCard;
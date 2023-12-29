import React from 'react'
import { Button } from '@/Components/ui/button';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from 'react';
const DoctorCard = ({Data,doctor}) => {
    console.log(Data);
    const [name,setName] = useState('');
    const [image,setImg] = useState('');
    useEffect(()=>{
        const filterData=()=>{ 
            doctor.map((D)=>{
                if (Data.user_id === D.id){
                    setName(D.name);
                    setImg(D.avatar);
                }
            }) 
        };
        filterData();
    },[])
    
  return (
    <div id='appointment' className='flex  flex-row gap-12 border-[2px] border-white hover:bg-[#30426f] bg-blue-60 bg-[#20315b] rounded-3xl p-10'>
    
    <div>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Dr:{name}
    </h3>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      <b>Specialization</b> {Data.specialization}

    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      <b>Experience:</b> {Data.experience} years
      
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      <b>Hospital:</b> {Data.current_working_place}
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      <b>Charges:</b> {Data.charges_first_appointment} Pkr
    </p>
    </div>

    <div>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      <b>Availability:</b> {Data.availability_time}
    </p>

    <p className="leading-7 [&:not(:first-child)]:mt-6">
      <b>Follow up Charges:</b> {Data.charges_follow_up} Pkr
    </p>



        <form className=' mt-32' action="">
        <input type="date" className='bg-[#172545] p-1 rounded-3xl h-8 outline-none rounded-r-none px-4' />
        <Button className="rounded-3xl rounded-l-none p-1 px-4 h-8" >Book</Button>
        </form>
    </div>
        
    </div>
  )
}

export default DoctorCard;
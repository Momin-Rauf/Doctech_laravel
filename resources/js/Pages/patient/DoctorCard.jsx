import React from 'react'
import { Button } from '@/Components/ui/button';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner"
const DoctorCard = ({Data,doctor}) => {
    console.log(Data,'dasda');
    const { data, setData, post, processing, errors, reset } = useForm({
        id:'',
        date:'',
    });
    const [name,setName] = useState('');
    const [image,setImg] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        setData('id',Data.id);
        console.log(Data.id)
        post(route('appoint'));
    }

    useEffect(()=>{
        const filterData=()=>{ 
            doctor.map((D,index)=>{
                const key=index;
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



    <form className=' mt-32' onSubmit={submitHandler}>
  <input type="date" value={data.date} onChange={(e) => setData('date', e.target.value)} className='bg-[#172545] p-1 rounded-3xl h-8 outline-none rounded-r-none px-4' />
  <button type="submit" className="rounded-3xl rounded-l-none p-1 px-4 h-8">Book</button>
  <Toaster data={'Appointment has been scheduled'} />
</form>
    </div>
        
    </div>
  )
}

export default DoctorCard;
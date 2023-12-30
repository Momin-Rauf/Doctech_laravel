import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Head } from '@inertiajs/react';
import SideBarDr from './SideBarDr';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useForm} from '@inertiajs/inertia-react'
import Navbar from './Navbar';
import { useState } from 'react';
const DoctorData = () => {
  const [click,setClicked] = useState(false);
  const { data, setData, post, processing, errors, reset } = useForm({
    name:'',
    address:"",
    
    email:'',
    password:'',
    role:'doctor',
    specialization:'',
    experience:'',
    current_working_place:'',
    availability:'',
    Did:'',
    charges_first_appointment:'',
    charges_follow_up:'',
});



const Click=()=>{
  console.log(click)
    setClicked(!click);
}


  const dataSubmit=(e)=>{
    
    e.preventDefault();
    console.log(data);
    post(route('admin.updateDoctor'));
  }
  return (
    <>
    <Head title="Admin" />
    <Navbar click={Click} />
    <div className="flex flex-col h-[20vh]" >
    <div id='sidebar' className="w-[100%] flex flex-row " >
        {click && <SideBarDr/>}
        <div>
        <Tilt tiltMaxAngleX={.5} tiltMaxAngleY={1.5} >    
        <form onSubmit={dataSubmit} className="p-5 m-5 bg-[brown] rounded-lg" >

        <Label>Dr Id</Label>
          <Input value={data.Did} onChange={(e)=>{setData('Did',e.target.value)}} text='text' />



          <Label>First Name</Label>
          <Input value={data.name} onChange={(e)=>{setData('name',e.target.value)}} text='text' />

          

          <Label>Email:</Label>
          <Input value={data.email} onChange={(e)=>{setData('email',e.target.value)}} text='email' />

          <Label>Password</Label>
          <Input value={data.password} onChange={(e)=>{setData('password',e.target.value)}} text='password' />
                   

         
         








  
  

               
  

        <Label>Specialization:</Label>
        <Input text='text' value={data.specialization} onChange={(e)=>{setData('specialization',e.target.value)}}  row='2' col='2' span='2' / >

        <Label>Experience:</Label>
        <Input text='number' value={data.experience} onChange={(e)=>{setData('experience',e.target.value)}}  row='2' col='2' span='2' />

        <Label>current_working_place:</Label>
        <Input text='text' value={data.current_working_place} onChange={(e)=>{setData('current_working_place' ,e.target.value)}}  row='2' col='2' span='2' />

        <Label>Availability:</Label>
        <Input text='text' value={data.availability} onChange={(e)=>{setData('availability',e.target.value)}}  row='2' col='2' span='2' />

        <Label>Charges:</Label>
        <Input text='number' value={data.charges_first_appointment} onChange={(e)=>{setData('charges_first_appointment',e.target.value)}}  row='2' col='2' span='2' />

        <Label>Follow Up Charges:</Label>
        <Input text='number' value={data.charges_follow_up} onChange={(e)=>{setData('charges_follow_up',e.target.value)}}  row='2' col='2' span='2' />



        <button type="submit" >Register</button>




        
        </form>
        </Tilt>
        </div>
        </div>

    </div>
    </>
  )
}

export default DoctorData;
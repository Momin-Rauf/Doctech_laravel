//importing the components
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Head } from '@inertiajs/react';
import SideBar from './SideBar';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
import {useForm} from '@inertiajs/inertia-react'
import Navbar from './Navbar';
const editUserData = () => {


    const [click,setClicked] = useState(false);


    // use form to submit the data
  const { data, setData, post, processing, errors, reset } = useForm({
    name:'',
    address:"",
    phone_no:undefined,
    cnic:undefined,
    age:undefined,
    blood_group:'A+',
    sex:'Male',
    married_status :'single',
    email:'',
    password:'',
    role:'patient',
    pid:'',
});


// method to toggle the sidebar
const Click=()=>{
    console.log(click)
      setClicked(!click);
  }





  // method to submit the data - data sent is update
  const dataSubmit=(e)=>{    
    e.preventDefault();
    post(route('admin.updateData'));
  }
  return (
    <>
    <Head title="Admin" />
    {/* Displaying the navbar */}
    <Navbar click={Click} />

    <div className="flex flex-col h-[20vh]" >

    <div id='sidebar' className="w-[100%] flex flex-row " >

      {/* Displaying the sidebar based on click */}
        {click && <SideBar/>}
        <div>
        <Tilt tiltMaxAngleX={.5} tiltMaxAngleY={1.5} >    

        <form onSubmit={dataSubmit} className="p-5 m-5 bg-[brown] rounded-lg" >


{/* Using label and input from shadcn */}
        <Label>Patient Id</Label>
          <Input value={data.pid} onChange={(e)=>{setData('pid',e.target.value)}} text='text' />


          <Label>Name</Label>
          <Input value={data.name} onChange={(e)=>{setData('name',e.target.value)}} text='text' />

          

          <Label>Email:</Label>
          <Input value={data.email} onChange={(e)=>{setData('email',e.target.value)}} text='email' />

          <Label>Password</Label>
          <Input value={data.password} onChange={(e)=>{setData('password',e.target.value)}} text='password' />
                   

          <Label>CNIC:</Label>
          <Input value={data.cnic} onChange={(e)=>{setData('cnic',e.target.value)}} text='number' />

          <Label>DOB</Label>
          <Input value={data.DOB} onChange={(e)=>{setData('DOB',e.target.value)}} text='date' />

         
          <Label>Age</Label>
          <Input onChange={(e)=>{setData('age',e.target.value)}} value={data.age} text='number'/>



          <Label>Registration Data</Label>
          <Input onChange={(e)=>{setData('date',e.target.value)}} value={data.date} text='date' />

          <Label>Father Name</Label>
          <Input  text='text' />
          <Label>Phone:</Label>
                <Input value={data.phone_no} onChange={(e) => { setData('phone_no', e.target.value) }} type='number' />

                <Label>DOB:</Label>
                <Input value={data.DOB} onChange={(e) => { setData('DOB', e.target.value) }} type='date' />

             

                <Label>Sex:</Label>
                <select name="sex" id="sex"  onChange={(e) => { setData('sex', e.target.value) }}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <Label>Blood Group:</Label>
                <select name="Blood group" id="blood group" onChange={(e) => { setData('blood_group', e.target.value) }}>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                  <option value="O+">O+</option>
                  <option value="AB-">AB-</option>
                  <option value="AB+">AB+</option>
                </select>

                <Label htmlFor="">Married:</Label>
                <Input
                  type="radio"
                  id="html"
                  name="married_status"
                  onChange={(e) => { setData('married_status', e.target.value) }}
                  value="married"
                />
                <Label htmlFor="html">Yes</Label>
                <Input
                  type="radio"
                  id="no"
                  name="married_status"
                  onChange={(e) => { setData('married_status', e.target.value) }}
                  value="single"
                />
                <Label htmlFor="no">No</Label>
  
        <Label>Address</Label>
        <textarea value={data.address} onChange={(e)=>{setData('address',e.target.value)}}  row='2' col='2' span='2' ></textarea>
        <button type="submit" >Register</button>
        </form>
        </Tilt>
        </div>
        </div>

    </div>
    </>
  )
}

export default editUserData;
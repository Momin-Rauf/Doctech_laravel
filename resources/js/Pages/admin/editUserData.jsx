import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Head } from '@inertiajs/react';
import SideBar from './SideBar';
import { useState } from 'react';
import {useForm} from '@inertiajs/inertia-react'
import Navbar from './Navbar';
const editUserData = () => {
    const [click,setClicked] = useState(false);
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

const Click=()=>{
    console.log(click)
      setClicked(!click);
  }




  const dataSubmit=(e)=>{
    
    e.preventDefault();
    post(route('admin.updateData'));
  }
  return (
    <>
    <Head title="Admin" />
    <Navbar click={Click} />
    <div className="flex flex-col h-[20vh]" >
    <div id='sidebar' className="w-[100%] flex flex-row " >
        {click && <SideBar/>}
        <div>
        <Tilt tiltMaxAngleX={.5} tiltMaxAngleY={1.5} >    

        <form onSubmit={dataSubmit} className="p-5 m-5 bg-[brown] rounded-lg" >

        <label>Patient Id</label>
          <input value={data.pid} onChange={(e)=>{setData('pid',e.target.value)}} text='text' />


          <label>Name</label>
          <input value={data.name} onChange={(e)=>{setData('name',e.target.value)}} text='text' />

          

          <label>Email:</label>
          <input value={data.email} onChange={(e)=>{setData('email',e.target.value)}} text='email' />

          <label>Password</label>
          <input value={data.password} onChange={(e)=>{setData('password',e.target.value)}} text='password' />
                   

          <label>CNIC:</label>
          <input value={data.cnic} onChange={(e)=>{setData('cnic',e.target.value)}} text='number' />

          <label>DOB</label>
          <input value={data.DOB} onChange={(e)=>{setData('DOB',e.target.value)}} text='date' />

         
          <label>Age</label>
          <input onChange={(e)=>{setData('age',e.target.value)}} value={data.age} text='number'/>



          <label>Registration Data</label>
          <input onChange={(e)=>{setData('date',e.target.value)}} value={data.date} text='date' />

          <label>Father Name</label>
          <input  text='text' />

     
         








  
  <label>Phone:</label>
                <input value={data.phone_no} onChange={(e) => { setData('phone_no', e.target.value) }} type='number' />

                <label>DOB:</label>
                <input value={data.DOB} onChange={(e) => { setData('DOB', e.target.value) }} type='date' />

                {/* ... other input fields ... */}

                <label>Sex:</label>
                <select name="sex" id="sex"  onChange={(e) => { setData('sex', e.target.value) }}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <label>Blood Group:</label>
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

                <label htmlFor="">Married:</label>
                <input
                  type="radio"
                  id="html"
                  name="married_status"
                  onChange={(e) => { setData('married_status', e.target.value) }}
                  value="married"
                />
                <label htmlFor="html">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="married_status"
                  onChange={(e) => { setData('married_status', e.target.value) }}
                  value="single"
                />
                <label htmlFor="no">No</label>
  
        <label>Address</label>
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
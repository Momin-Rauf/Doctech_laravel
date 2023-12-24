import React from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';
import { useState } from 'react';
const show_patients = () => {
  const [click,setClicked] = useState(false);
   
    const Click=()=>{
      console.log(click)
        setClicked(!click);
    }

  return (
    <>
    <Navbar click={Click} />
        <div className="flex flex-col h-[20vh]" >
     
      
    <div id='sidebar' className="w-[100%] flex flex-row " >
    {click && <SideBar/>}

    </div></div></>
  )
}

export default show_patients;
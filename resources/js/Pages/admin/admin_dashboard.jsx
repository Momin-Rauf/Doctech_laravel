
import Navbar from "./Navbar";
import React, { useState } from 'react';

// import {Link} from "@inertiajs/react";
import UserData from './UserData';
// import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import DoctorData from "./DoctorData";

export default function admin_dashboard() {
  




  const [click,setClicked] = useState(false);
  
  const Click=()=>{
    console.log(click)
      setClicked(!click);
  }

  return (
    <>
    <Head title="Admin" />
    <div className="flex flex-col bg-[#505050] h-[100vh]" >
      <Navbar click={Click} />
      <UserData click={click} />
      {/* <DoctorData click={click} /> */}
       
    </div>
    </>
  );
}
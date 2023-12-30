
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
    // This function is used to close and open the sideBar
      setClicked(!click);
  }

  return (


    <>
    <Head title="Admin" />
    <div className="flex flex-col  h-[100vh]" >

      {/* the Navbar component */}
      <Navbar click={Click} />

      {/* the UserData component  */}
      <UserData click={Click} />
      {/* <DoctorData click={click} /> */}
       
    </div>
    </>
  );
}
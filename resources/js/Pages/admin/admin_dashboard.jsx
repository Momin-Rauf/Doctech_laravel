
import Navbar from "./Navbar";
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// import {Link} from "@inertiajs/react";
import UserData from './UserData';
// import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import DoctorData from "./DoctorData";

export default function admin_dashboard() {
  




  
  
  

  return (


    <>
    <Head title="Admin" />
    <div className="flex flex-col h-[100vh]" >

      
      <Navbar   />

     <div className=" ml-4 mt-4 " >
     <Tabs defaultValue="patient" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="doctor">Doctor</TabsTrigger>
    <TabsTrigger value="patient">Patient</TabsTrigger>
  </TabsList>
  <TabsContent value="patient"><UserData/></TabsContent>
  <TabsContent value="doctor"><DoctorData/></TabsContent>
</Tabs>
     </div>
 
     
       
    </div>
    </>
  );
}
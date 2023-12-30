import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useEffect } from 'react';
import { useState } from 'react';

const AppointmentCard = (user,patient,appointment) => {
    console.log(user);
    const [detail,setDetail] = useState([]);
    const [id,setid] = useState();

    useEffect(() => {
        const fetch = () =>{
            let detailData = [];
            {
                user.appointment.map((A,index)=>{
                   
                    user.patient.map((E,index)=>{
                        
                        if(E.id === A.patient_id){
                         
                            
                           
                            user.user.map((D,index)=>{
                                if(D.id === E.user_id){
                                    <p key={index} ></p>
                                    console.log(D,'D');
                                    detailData.push({name:D.name,email:D.email,Details:E,appoint:A});
                                }
                            })
                        }   

                    });
                });
            }
            setDetail(detailData);
            console.log( 'detail', detail);
        }
        fetch();
    },[]);


    const [name,setName] = useState([]);
  return (
    <Table>
  <TableCaption>Your Pending Appointments</TableCaption>
  <TableHeader>
    <TableRow>
    <TableHead className="w-[100px]">Appointment NO:</TableHead>
    <TableHead className="w-[100px]">Patient ID</TableHead>
      <TableHead className="w-[100px]">Patient Name</TableHead>
      <TableHead>Date & Time</TableHead>
      <TableHead>Patient CNIC</TableHead>
      <TableHead className="">Gender</TableHead>
      <TableCell className="font-medium">Email</TableCell>
      <TableCell className="font-medium">Status</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      {detail.map((X,index)=>{
        return (
            <>
        <TableCell className="font-medium">{X.appoint.id}</TableCell>
        <TableCell className="font-medium">{X.Details.id}</TableCell>
        <TableCell className="font-medium">{X.name}</TableCell>
        
        <TableCell className="font-medium">{X.appoint.appointment_date}</TableCell>
        
        <TableCell className="font-medium">{X.Details.cnic}</TableCell>
        
        <TableCell className="font-medium">{X.Details.sex}</TableCell>
        
        <TableCell className="font-medium">{X.email}</TableCell>
        
        <TableCell className="font-medium">{X.appoint.status}</TableCell>
        
        
            </>
        )
      })}
      
    </TableRow>
  </TableBody>
</Table>
  )
}

export default AppointmentCard
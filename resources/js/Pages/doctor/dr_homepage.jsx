import React, {  useState } from 'react';
import { useForm } from '@inertiajs/react';
import { FaEdit } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link } from '@inertiajs/inertia-react';
// import Booking from '../patient/Booking';
import Card from './Card';
import AppointmentCard from './AppointmentCard';
import DoctorCard from '../patient/DoctorCard';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SlCalender } from "react-icons/sl";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UpdatePasswordForm from '../Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '../Profile/Partials/UpdateProfileInformationForm';
import { useEffect } from 'react';
import { set } from 'react-hook-form';
const DrHomepage = ({ patient, pData, Sugar,doc,Dr, Bp, prescriptions ,patientDetails, appointment,user }) => {
  
  const [view, setView] = useState(false);
  const { data, setData, post } = useForm({
    pid: '',
  });

  

  const submitHandler = (e) => {
    e.preventDefault();
    post(route('doctor.searchPatient'));
  };

  return (
    <>
    <div className="container mx-auto p-4 bg-blue-900 ">
      <div className="text-white  hover:text-gray-500  absolute right-[1%] top-4 h-10" >
                    <Sheet>
                        <SheetTrigger>
                            <CiUser
                                style={{ boxShadow: "0px 0px 2px white" }}
                                className=" shadow-white rounded-[20px] w-10 h-10 p-2 hover:scale-105  "
                                size={40}
                            />
                            <b className="hover:underline transition-all underline-offset-4" />
                            
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Dr:{Dr.name}</SheetTitle>
                                <SheetDescription>
                                  <Card Dr={Dr} doctor={doc} /> 
                                 
                                    <Link className="bg-blue-900 text-white relative top-10 p-4 rounded-2xl" href={route('Logout')}>Logout</Link>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                

                <div className="flex absolute left-[10%] text-white top-4 justify-center items-center flex-col " >
                            <SlCalender 
                                href={route('showAppointment')}
                                style={{ boxShadow: "0px 0px 2px white" }}
                                className=" shadow-white  rounded-[20px]  w-14 h-10 p-2 hover:scale-105  "
                                size={40}
                            >

                            </SlCalender>
                            <Link href={route('chatify')} className="hover:underline transition-all underline-offset-4" >Chats</Link>
                            </div>


                <div className="hover:underline text-white hover:text-gray-500 h-10">
                    <Sheet>
                        <SheetTrigger>
                            <FaEdit
                                style={{ boxShadow: "0px 0px 2px white" }}
                                className=" shadow-white rounded-[20px] w-14 h-10 p-2 hover:scale-105  "
                                size={35}
                            />
                            <b className="hover:underline transition-all underline-offset-4" >Edit</b>
                            
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Update User Form</SheetTitle>
                                <SheetDescription>
                                    <Tabs
                                        defaultValue="account"
                                        className="w-[400px]"
                                    >
                                        <TabsList>
                                            <TabsTrigger value="account">
                                                Account
                                            </TabsTrigger>
                                            <TabsTrigger value="password">
                                                Password
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="account">
                                            <UpdateProfileInformationForm />
                                        </TabsContent>
                                        <TabsContent value="password">
                                            <UpdatePasswordForm />
                                        </TabsContent>
                                    </Tabs>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
             


      
      <form onSubmit={submitHandler} className="mb-4 flex mt-24 items-center justify-center">
      <h2 className="scroll-m-20 top-24 pb-2 text-3xl font-semibold absolute text-white tracking-tight first:mt-0">
                    Enter Patient Id
    </h2>
        <input
          onChange={(e) => setData('pid', e.target.value)}
          type="number"
          value={data.pid}
          className="border-2 border-blue-500 rounded-l px-4 py-2 w-1/3 focus:outline-none"
          placeholder="Enter Patient ID"
        />
        <button
          type='submit'
          className="bg-blue-500 text-white px-8 py-2 rounded-r focus:outline-none"
        >
          Search
        </button>
      </form>

      {patient && <button
        onClick={() => { setView(!view) }}
        className="bg-green-500 text-white px-6 py-2 rounded mb-4 focus:outline-none"
      >
        {view ? 'Hide Details' : 'Show Details'}
      </button> }

      {view &&
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-4">Patient Information</h2>
              <p className="text-gray-600 mb-2"><span className="font-semibold">ID:</span> {patient.id}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Name:</span> {patient.name}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {patient.email}</p>
            </div>

            {/* Render Sugar Data */}
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-4">Sugar Data</h2>
              <table className="w-full">
                {/* Table Head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Sugar Level</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {Sugar.map((sugarData) => (
                    <tr key={sugarData.id}>
                      <td>{sugarData.id}</td>
                      <td>{sugarData.sugar_level}</td>
                      <td>{sugarData.date}</td>
                      <td>{sugarData.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Render BP Data */}
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-4">BP Data</h2>
              <table className="w-full">
                {/* Table Head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Systolic</th>
                    <th>Diastolic</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {Bp.map((bpData) => (
                    <tr key={bpData.id}>
                      <td>{bpData.id}</td>
                      <td>{bpData.date}</td>
                      <td>{bpData.time}</td>
                      <td>{bpData.systolic}</td>
                      <td>{bpData.diastolic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Render Prescriptions */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Prescriptions</h2>
            <table className="w-full">
              {/* Table Head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Medicine Name</th>
                  <th>Dose</th>
                  <th>Frequency</th>
                  <th>Done</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {prescriptions.map((prescription) => (
                  <tr key={prescription.id}>
                    <td>{prescription.id}</td>
                    <td>{prescription.medicine_name}</td>
                    <td>{prescription.dose}</td>
                    <td>{prescription.frequency}</td>
                    <td>{prescription.done ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      }


    </div>
      <AppointmentCard user={user} patient={patientDetails} appointment={appointment} />
      </>
  );
};

export default DrHomepage;

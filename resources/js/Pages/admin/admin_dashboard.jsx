import logo from "../images/logo.png";
import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import PatientData from "./PatientData";

export default function admin_dashboard() {
  const [biodata, setBiodata] = useState({
    pid: null,
    age: null,
    address: null,
    phone: null,
    cnic: null,
    history: null,
    sex: null,
    marriedstatus: null,
    DOB: null,
    registrationDate: null,
    bloodgroup: null,
  });



  const bioData = (obj) => {
    setBiodata(obj);
  };






  

  return (
    <>
      <Head title="Admin Dashboard" />

      <div className="h-[100vh]">
        <PatientData bioData={bioData} data={biodata} />
      </div>
      <div className="h-[100vh]">Medical History</div>
    </>
  );
}
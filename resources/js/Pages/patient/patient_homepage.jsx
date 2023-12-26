import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import Tilt from 'react-parallax-tilt';
import UserCard from './UserCard';

const PatientHomepage = ({ user, userData, Bp, Sugar, prescriptions }) => {
  const [User, setUser] = useState([]);
  const [BpReadings, setBpReadings] = useState([]);
  const [SugarLevels, setSugarLevels] = useState([]);
  const [Prescriptions, setPrescriptions] = useState([]);
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    const fetch = () => {
      setUser(user);
      setUserData(userData);
      setBpReadings(Bp);
      setSugarLevels(Sugar);
      setPrescriptions(prescriptions);
    };

    fetch();
  }, [user, userData, Bp, Sugar, prescriptions]);

  return (
    <div className="bg-[rgb(50,198,154)] h-[100vh] min-h-[100vh]">
      <div className="bg-[rgb(50,198,15)] h-[10%] flex flex-row m-auto justify-between items-center">
        <Link href={route('profile.edit')}>Profile</Link>
      </div>

      <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={1.5}>
        <UserCard UserData={UserData} User={User} />
      </Tilt>

<div className="col-span-full md:col-span-1 lg:col-span-1">
  <h2 className="text-xl font-bold mb-4 text-white">Blood Pressure Readings</h2>
  <div className="bg-white rounded-md overflow-hidden shadow-md">
    <table className="min-w-full">
      <thead className="bg-[rgb(50,198,154)] text-white">
        <tr>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Time</th>
          <th className="py-2 px-4">Systolic</th>
          <th className="py-2 px-4">Diastolic</th>
        </tr>
      </thead>
      <tbody>
        {BpReadings.map((reading) => (
          <tr key={reading.id} className="border-t">
            <td className="py-2 px-4">{reading.date}</td>
            <td className="py-2 px-4">{reading.time}</td>
            <td className="py-2 px-4">{reading.systolic}</td>
            <td className="py-2 px-4">{reading.diastolic}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

<div className="col-span-full md:col-span-1 lg:col-span-1">
  <h2 className="text-xl font-bold mb-4 text-white">Sugar Levels</h2>
  <div className="bg-white rounded-md overflow-hidden shadow-md">
    <table className="min-w-full">
      <thead className="bg-[rgb(50,198,154)] text-white">
        <tr>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Time</th>
          <th className="py-2 px-4">Sugar Level</th>
        </tr>
      </thead>
      <tbody>
        {SugarLevels.map((reading) => (
          <tr key={reading.id} className="border-t">
            <td className="py-2 px-4">{reading.date}</td>
            <td className="py-2 px-4">{reading.time}</td>
            <td className="py-2 px-4">{reading.sugar_level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

<div className="col-span-full">
  <h2 className="text-xl font-bold mb-4 text-white">Prescriptions</h2>
  <div className="bg-white rounded-md overflow-hidden shadow-md">
    <table className="min-w-full">
      <thead className="bg-[rgb(50,198,154)] text-white">
        <tr>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Medicine Name</th>
          <th className="py-2 px-4">Dose</th>
          <th className="py-2 px-4">Frequency</th>
          <th className="py-2 px-4">Done</th>
        </tr>
      </thead>
      <tbody>
        {Prescriptions.map((prescription) => (
          <tr key={prescription.id} className="border-t">
            <td className="py-2 px-4">{prescription.created_at}</td>
            <td className="py-2 px-4">{prescription.medicine_name}</td>
            <td className="py-2 px-4">{prescription.dose}</td>
            <td className="py-2 px-4">{prescription.frequency}</td>
            <td className="py-2 px-4">{prescription.done}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default PatientHomepage;

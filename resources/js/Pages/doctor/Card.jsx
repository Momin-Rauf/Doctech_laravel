import React from 'react';

const Card = ({ doctor, Dr }) => {
  return (
    <div className="bg-white p-8 rounded shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Doctor Information</h3>
      <div className="mb-4">
        
        <p className="text-gray-600">Email: {Dr.email}</p>
        <p className="text-gray-600">Role: {Dr.role}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">{doctor.specialization}</h2>
      <div className="mb-4">
        <p className="text-gray-600">Experience: {doctor.experience} years</p>
        <p className="text-gray-600">Address: {doctor.address}</p>
        <p className="text-gray-600">Working Place: {doctor.current_working_place}</p>
        <p className="text-gray-600">Availability Time: {doctor.availability_time}</p>
        <p className="text-gray-600">Charges for First Appointment: {doctor.charges_first_appointment}</p>
        <p className="text-gray-600">Charges for Follow-up: {doctor.charges_follow_up}</p>
      </div>
    </div>
  );
};

export default Card;

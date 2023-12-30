import React from 'react'

const Booking = ({appointments}) => {
  return (
    <div>
        {
            appointments.map((booking,index)=>{
               return (
                <div key={index} className="border p-4">
                <div>
                  <span className="font-bold">Status:</span> {booking.status}
                </div>
                <div>
                  <span className="font-bold">Patient ID:</span> {booking.patient_id}
                </div>
                <div>
                  <span className="font-bold">Doctor ID:</span> {booking.doctor_id}
                </div>
                <div>
                  <span className="font-bold">Appointment Date:</span>{' '}
                  {booking.appointment_date}
                </div>
              </div> 
               )
            })}
    </div>
)};

export default Booking
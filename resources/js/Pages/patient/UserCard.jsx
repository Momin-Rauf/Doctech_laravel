import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserCard = ({ UserData, User }) => {
  return (
    <div className="">
        <div className='' >
      <img   alt="" />
      
      </div>
      <div>{User.map((p, index) => (
        <div key={index} className="mb-4">
          <p className="text-xl font-bold">{p.name}</p>
          <p className="text-sm">{p.email}</p>
        </div>
      ))}

      {/* Additional User Data */}
      {UserData.map((p, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg">{p.address}</p>
          <p className="text-sm">CNIC: {p.cnic}</p>
          <p className="text-sm">Phone: {p.phone}</p>
          <p className="text-sm">Blood Group: {p.blood_group}</p>
          <p className="text-sm">Sex: {p.sex}</p>
          <p className="text-sm">DOB: {p.DOB}</p>
          <p className="text-sm">Age: {p.age}</p>
        </div>
      ))}</div>
    
    </div>
  );
};

export default UserCard;

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// This component is used to display the user Data on the sheet
const UserCard = ({ UserData, User }) => {
  return (
    <div className="flex items-center space-x-4 bg-blue-200 p-6 rounded-md shadow-md">
      <div className="flex-shrink-0">
        {/* <Avatar>
          <AvatarFallback>
            <img
              src=""
              alt="Avatar"
              className="w-16 h-16 rounded-full border-4 border-white"
            />
          </AvatarFallback>
          <AvatarImage>
            <img src='' alt="Avatar" className="w-16 h-16 rounded-full" />
          </AvatarImage>
        </Avatar> */}
      </div>
      <div>
        {User.map((p, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl font-bold text-blue-800">{p.name}</p>
            <p className="text-sm text-blue-600">{p.email}</p>
          </div>
        ))}

        {/* Additional User Data */}
        {UserData.map((p, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg text-blue-800">{p.address}</p>
            <p className="text-sm text-blue-600">CNIC: {p.cnic}</p>
            <p className="text-sm text-blue-600">Phone: {p.phone}</p>
            <p className="text-sm text-blue-600">Blood Group: {p.blood_group}</p>
            <p className="text-sm text-blue-600">Sex: {p.sex}</p>
            <p className="text-sm text-blue-600">DOB: {p.DOB}</p>
            <p className="text-sm text-blue-600">Age: {p.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;

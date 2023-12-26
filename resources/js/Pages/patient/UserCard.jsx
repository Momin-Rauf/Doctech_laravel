import React from 'react';

const UserCard = ({ UserData, User }) => {
  return (
    <div className="bg-[rgb(45,152,120)] flex flex-row h-[100vh] justify-between  items-center p-4 text-white">
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
      <div>image
        Image
      </div>
    </div>
  );
};

export default UserCard;

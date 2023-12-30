import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from '@inertiajs/inertia-react';  // Update the import statement
import { useForm } from '@inertiajs/inertia-react'; // Update the import statement
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Navbar = ({ click }) => {
  const { post } = useForm();

  const logout = () => {
    post(route('Logout'));
  };

  return (
    <nav className="h-[80px] bg-blue-500 gap-12 flex flex-row p-7">
      
        
      <button onClick={() => click()}>Side</button>
      <div className="flex flex-row">
        <Tilt glareColor={'lightblue'}>
          <Link
            href={route('admin.dashboard')}
            className="m-12 hover:text-white shadow-md rounded-lg p-4 shadow-black"
          >
            Patient
          </Link>
        </Tilt>
        <Tilt glareColor={'lightblue'}>
          <Link
            href={route('doctorAdmin')}
            className="m-12 hover:text-white shadow-md rounded-lg p-4 shadow-black"
          >
            Doctor
          </Link>
        </Tilt>
      </div>
      <button className='absolute right-2' onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
            
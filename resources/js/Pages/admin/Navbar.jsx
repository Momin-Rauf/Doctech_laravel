// Importing the components
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link, useForm } from '@inertiajs/inertia-react';  // Combined import statement
import { Link as LinkReact } from '@inertiajs/react';

const Navbar = () => {
  // This component is navbar component which is imported in all other components

  const { post } = useForm();
  // Extracted the post method from useForm provided by inertia

  const logout = () => {
    // Function used to logout the admin
    post(route('Logout'));
  };

  return (
    <nav className="h-[10%]  bg-slate-400 flex justify-end items-center flex-row">
      
        
         
    <p>|</p>
      
      <LinkReact
        href={route('Logout')}
        className="ml-6 mr-2 text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
        onClick={logout}
      >
        Logout
      </LinkReact>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from '@inertiajs/inertia-react';  // Update the import statement
import { useForm } from '@inertiajs/inertia-react'; // Update the import statement

const Navbar = ({ click }) => {
  const { post } = useForm();

  const logout = () => {
    post(route('Logout'));
  };

  return (
    <nav className="h-[80px] bg-[#404040] gap-12 flex flex-row items-center justify-center">
      <button onClick={() => click()}>Side</button>
      <div className="flex flex-row">
        <Tilt glareColor={'white'}>
          {/* Use the Link component from @inertiajs/inertia-react */}
          <Link
            href={route('admin.dashboard')}
            className="m-12 hover:text-white shadow-md rounded-lg p-4 shadow-black"
          >
            Patient
          </Link>
        </Tilt>
        <Tilt>
          {/* Use the Link component from @inertiajs/inertia-react */}
          <Link
            href={route('doctorAdmin')}
            className="m-12 hover:text-white shadow-md rounded-lg p-4 shadow-black"
          >
            Doctor
          </Link>
        </Tilt>

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from '@inertiajs/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const SideBar =()=>{
    return (
        
        <div className="bg-brown w-[20%] bg-blue-200 h-[100vh] flex flex-col gap-10 p-4  " >
            <Link className='bg-blue-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600' href={route('admin.dashboard')} >Create</Link>
            <Link className='bg-blue-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600' href={route('admin.show_edit')}  >Edit</Link>
            <Link className='bg-blue-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600' href={route('admin.show_mh')} >Medical History</Link>
            <Link className='bg-blue-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600' href={route('admin.AllpatientsViewPage')} >View All Patients</Link>

        </div>
    );
}

export default SideBar;
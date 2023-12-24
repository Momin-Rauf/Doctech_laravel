import React from 'react';
import { Link } from '@inertiajs/react';

const SideBar =()=>{
    return (
        
        <div className="bg-brown w-[20%] bg-[brown] h-[100vh] " >
            <Link href={route('admin.dashboard')} >Create</Link>
            <Link href={route('admin.show_edit')}  >Edit</Link>
            <Link href={route('admin.show_mh')} >Medical History</Link>
            <Link href={route('admin.admin.AllpatientsViewPage')} >View All Patients</Link>

        </div>
    );
}

export default SideBar;
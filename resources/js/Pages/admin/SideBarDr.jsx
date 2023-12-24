import React from 'react';
import { Link } from '@inertiajs/react';

const SideBarDr =()=>{
    return (
        
        <div className="bg-brown w-[20%] bg-[brown] h-[100vh] " >
            <Link href={route('show_dr_page')}  >Create Doctor Account</Link>
            <Link href={route('show_dr_edit')} >Edit Doctor Data</Link>
            <Link href={route('admin.AllDoctorsViewPage')} >View All Doctors</Link>
        </div>
    );
}

export default SideBarDr;
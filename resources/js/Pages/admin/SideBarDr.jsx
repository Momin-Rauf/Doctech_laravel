import React from 'react';
import { Link } from '@inertiajs/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SideBarDr =()=>{
    return (
        
        <div className="bg-brown w-[20%] flex flex-col p-4 gap-4 border-r-[1px] shadow-md shadow-black border-black h-[100vh] " >
            <Link className='bg-blue-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600' href={route('show_dr_page')}  >Create Doctor Account</Link>
            <Link className='bg-blue-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600' href={route('show_dr_edit')} >Edit Doctor Data</Link>
            {/* <Link href={route('AllDoctorsViewPage')} >View All Doctors</Link> */}
        </div>
    );
}

export default SideBarDr;
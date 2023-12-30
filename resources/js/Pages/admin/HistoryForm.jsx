// importing the components
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import SideBar from './SideBar';
import {useForm} from '@inertiajs/inertia-react'
const HistoryForm = ()=>{
    const [click,setClicked] = useState(false);
   
    const Click=()=>{
      console.log(click)
        setClicked(!click);
    }
    // use form to submit the data
    const { data, setData, post, processing, errors, reset } = useForm({
        issue:'',
        history:'',
        pid:undefined,
    });

    const submit = (e)=>{
        e.preventDefault();
        post(route('admin.add_mh'));
    }
    
    return (
       <>
       {/* Navbar */}
        <Navbar click={Click} />
        <div className="flex flex-col h-[20vh]" >
     
      
      {/* SideBar */}
    <div id='sidebar' className="w-[100%] flex flex-row " >
    {click && <SideBar/>}


        
        
        <form onSubmit={submit} >
            {/* Form to submit the data */}
            <label htmlFor="">Patient Id</label>
            <Input value={data.pid} onChange={(e)=>{setData('pid',e.target.value)}} type="text" />

{/* Medical Issues */}
            <label>Medical Issue</label>
            <textarea value={data.issue} onChange={(e)=>setData('issue',e.target.value)} ></textarea>

            {/* Family history */}
            <label>Family History</label>
            <textarea value={data.history} onChange={(e)=>setData('history',e.target.value)} ></textarea>
            <button type='submit' >Add</button>
        </form>
        </div>
        </div>
        </>
    )

}

export default HistoryForm;
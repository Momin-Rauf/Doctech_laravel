import { Link, Head } from "@inertiajs/react";
import React, { useState, useEffect } from 'react';
// import logo from "./images/logo.png";
import FAQ from "../Components/FAQ";
import Card from "@/Components/Card";
import ServiceCard from "./ServiceCard";
import './style.css'
import home from "./images/home.mp4";
import Footer from "@/Components/Footer";
export default function Welcome({ auth, laravelVersion, phpVersion,faq,service }) {
    const [start, setStart] = useState('start');
    console.log(service)
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col p12 m-0   ">
                
                <div className="h-screen">
                <Link
                        href={route("login")}
                        className="font-semibold z-20 absolute text-sm  top-[5%] ml-[85%]   bg-black w-[7%] py-2 border-[1px] text-center  border-[#fff]  text-[#fff]  hover:bg-[#fff] rounded-[40px] hover:text-black"
                    >
                        FAQs
                    </Link>

                    <Link
                        href={route("login")}
                        className="font-semibold z-20 absolute text-sm  top-[5%] ml-[72%]   bg-black w-[10%] py-2 border-[1px] text-center  border-[#fff]  text-[#fff] hover:text-black hover:bg-[#fff] rounded-[40px] "
                    >
                        Services
                    </Link>
                <div class="content font-bold">
                  <h2>Doctech</h2>
                  <h2>Doctech</h2>
                </div>
                   
                   <h2 className="z-10 absolute text-white font-semibold top-[32%] text-[30px] left-10 font-sans">
                        Bridging the Gap Between Healthcare and Technology
                    </h2>
                    <h2 className="z-10 absolute text-white font-semibold top-[38%] text-[30px] left-10">
                        {" "}
                        for a Seamless Patient Experience
                    </h2>
                 
                    <video
                        className="h-full text-white z-10 w-full object-cover "
                        autoPlay
                        muted
                        loop
                        src={home}
                    ></video>
                    <Link
                        href={route("login")}
                        className="font-semibold z-10 absolute  top-[80%] ml-[47%] px-9  bg-[#F3EEEA] w-[10%] py-3 border-[2px] text-center  border-[white]  text-[#000] hover:text-white hover:bg-[#123b94] rounded-[40px]   focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Log in
                    </Link>




                </div>
                <div className="  p-12 m-0  gap-5 flex flex-col h-auto bg-[#000] ">
                <h1 className="text-center font-extrabold text-[#fff] italic text-[40px]" >SERVICES</h1>
                   {service.map((s,index)=>{
                    return (
                        <ServiceCard key={index} title={s.title} description={s.description} ></ServiceCard>
                    )
                   })}
                            
                </div>
                <div className="h-[100vh] p-12 m-0 bg-[#2b7da8] ">
                    
                </div>

                <Footer />
            </div>
        </>
    );
}

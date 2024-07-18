import { Link, Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import "./style.css";
import home from "./images/home.mp4";
import Footer from "@/Components/Footer";

export default function Welcome({ faq, service }) {
    const [start, setStart] = useState("start");
    console.log(faq);

    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col m-0">
                <div className="h-screen">
                    <Link
                        className="font-semibold top-12 right-10 w-24 z-20 absolute text-sm md:text-base md:top-[5%] ml-[85%] bg-black md:w-[7%] py-2 border-[1px] text-center border-[#fff] text-[#fff] hover:bg-[#fff] rounded-[40px] hover:text-black"
                    >
                        FAQs
                    </Link>

                    <Link
                        className="font-semibold top-12 left-24 w-24  z-20 absolute text-sm md:text-base md:top-[5%] md:ml-[70%] bg-black md:w-[10%] py-2 border-[1px] text-center border-[#fff] text-[#fff] hover:text-black hover:bg-[#fff] rounded-[40px]"
                    >
                        Services
                    </Link>
                    <div className="content hidden md:block ">
                        <h2>Doctech</h2>
                        <h2>Doctech</h2>
                    </div>

                    <h2 className="z-10 absolute text-white font-semibold top-[32%] md:top-[32%] text-[30px] md:left-10 font-sans">
                        Bridging the Gap Between Healthcare and Technology
                    </h2>
                    <h2 className="z-10 absolute text-white font-semibold md:top-[40%]  md:block hidden text-[30px] left-12">
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
                        className="md:font-semibold md:z-10 absolute md:top-[80%] md:ml-[47%] md:px-9 md:bg-[#F3EEEA] md:w-[10%] md:pb-6 md:border-[2px] md:text-center md:border-[white] md:text-[#000] hover:text-white hover:bg-[#123b94] md:rounded-[40px] md:absolute focus:outline md:left-[0%] focus:outline-2 focus:rounded-sm left-[35%] focus:outline-red-500 bottom-24" 
                    >
                        Log in
                    </Link>
                </div>
                <div className="p-12 m-0 gap-5 flex flex-col h-auto bg-[#000] ">
                    <h1 className="text-center font-extrabold text-[#faefef] italic text-[40px]">
                        SERVICES
                    </h1>
                    {service.map((s, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                title={s.title}
                                description={s.description}
                            ></ServiceCard>
                        );
                    })}
                </div>
                <div className="h-[100vh] p-12 m-0 bg-[#2b7da8] ">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Frequently Asked Questions
                    </h2>
                    {faq.map((F, index) => {
                        return (
                            <div className="mt-2 mb-2" key={index}>
                                <Accordion
                                    key={index}
                                    type="single"
                                    collapsible
                                >
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger>
                                            {F.question}
                                        </AccordionTrigger>
                                        <AccordionContent>{F.answer}</AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        );
                    })}
                </div>

                <Footer />
            </div>
        </>
    );
}

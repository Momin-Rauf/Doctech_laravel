// importing all the components
import React from "react";
import Tilt from "react-parallax-tilt";
import { Head } from "@inertiajs/react";
import SideBarDr from "./SideBarDr";
import { useForm } from "@inertiajs/inertia-react";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const DoctorData = () => {
    const [click, setClicked] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        address: "",

        email: "",
        password: "",
        role: "doctor",
        specialization: "",
        experience: "",
        current_working_place: "",
        availability: "",
        charges_first_appointment: "",
        charges_follow_up: "",
    });

    const Click = () => {
        console.log(click);
        setClicked(!click);
    };

    const dataSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.createDoc"));
    };
    return (
        <>
            <Head title="Admin" />

            {/* Diplaying the navbar component */}
            <Navbar click={Click} />


            <div className="flex flex-col h-[20vh]">
                <div id="sidebar" className="w-[100%] flex flex-row ">

                  {/* Condition to check if button is on-- if on sidebar opens */}
                    {click && <SideBarDr />}
                    <div>
                        <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={1.5}>

                          {/* Form to submit the data and Register the Doctor */}
                            <form
                                onSubmit={dataSubmit}
                                className="p-5 m-5 justify-center items-center flex-row rounded-lg"
                            >
                                <div className="border-[2px] p-2 rounded-3xl">
                                    <label>First Name</label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) => {
                                            setData("name", e.target.value);
                                        }}
                                        text="text"
                                    />

                                    <label>Email:</label>
                                    <Input
                                        value={data.email}
                                        onChange={(e) => {
                                            setData("email", e.target.value);
                                        }}
                                        text="email"
                                    />

                                    <label>Password</label>
                                    <Input
                                        value={data.password}
                                        onChange={(e) => {
                                            setData("password", e.target.value);
                                        }}
                                        text="password"
                                    />

                                    <label>Specialization:</label>
                                    <Input
                                        text="text"
                                        value={data.specialization}
                                        onChange={(e) => {
                                            setData(
                                                "specialization",
                                                e.target.value
                                            );
                                        }}
                                        row="2"
                                        col="2"
                                        span="2"
                                    />

                                    <label>Experience:</label>
                                    <Input
                                        text="number"
                                        value={data.experience}
                                        onChange={(e) => {
                                            setData(
                                                "experience",
                                                e.target.value
                                            );
                                        }}
                                        row="2"
                                        col="2"
                                        span="2"
                                    />

                                    <label>current_working_place:</label>
                                    <Input
                                        text="text"
                                        value={data.current_working_place}
                                        onChange={(e) => {
                                            setData(
                                                "current_working_place",
                                                e.target.value
                                            );
                                        }}
                                        row="2"
                                        col="2"
                                        span="2"
                                    />
                                </div>
                                      

                                      {/* Form 2 to submit more information */}
                                <div className="absolute left-[100%] border-[2px] p-4 rounded-3xl top-[37%]">
                                    <label>Availability:</label>
                                    <Input
                                        text="text"
                                        value={data.availability}
                                        onChange={(e) => {
                                            setData(
                                                "availability",
                                                e.target.value
                                            );
                                        }}
                                        row="2"
                                        col="2"
                                        span="2"
                                    />

                                    <label>Charges:</label>
                                    <Input
                                        text="number"
                                        value={data.charges_first_appointment}
                                        onChange={(e) => {
                                            setData(
                                                "charges_first_appointment",
                                                e.target.value
                                            );
                                        }}
                                        row="2"
                                        col="2"
                                        span="2"
                                    />

                                    <label>Follow Up Charges:</label>
                                    <Input
                                        text="number"
                                        value={data.charges_follow_up}
                                        onChange={(e) => {
                                            setData(
                                                "charges_follow_up",
                                                e.target.value
                                            );
                                        }}
                                        row="2"
                                        col="2"
                                        span="2"
                                    />
                                </div>

                                <button type="submit">Register</button>
                            </form>
                        </Tilt>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorData;

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Head } from "@inertiajs/react";
import SideBarDr from "./SideBarDr";
import { useForm } from "@inertiajs/inertia-react";
// import Navbar from "./Navbar";
import EditDoctorData from "./editDoctorData";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

    const handleClick = () => {
        setClicked(!click);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.createDoc"));
    };

    return (
        <>
            <Head title="Admin" />
            <div className="flex flex-col w-[1220px] bg-slate-200">
                
                <div className="flex flex-row">
                    {click && <SideBarDr />}
                    <div className="flex-grow p-5">
                        <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={1.5}>
                            <form
                                onSubmit={handleSubmit}
                                className="p-5 m-5 bg-white rounded-lg shadow-lg"
                            >
                                <div className="border-2 p-4 rounded-3xl bg-slate-100">
                                    <Label>First Name</Label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                        type="text"
                                    />

                                    <Label>Email</Label>
                                    <Input
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                        type="email"
                                    />

                                    <Label>Password</Label>
                                    <Input
                                        value={data.password}
                                        onChange={(e) => setData("password", e.target.value)}
                                        type="password"
                                    />

                                    <Label>Specialization</Label>
                                    <Input
                                        value={data.specialization}
                                        onChange={(e) => setData("specialization", e.target.value)}
                                        type="text"
                                    />

                                    <Label>Experience</Label>
                                    <Input
                                        value={data.experience}
                                        onChange={(e) => setData("experience", e.target.value)}
                                        type="number"
                                    />

                                    <Label>Current Working Place</Label>
                                    <Input
                                        value={data.current_working_place}
                                        onChange={(e) => setData("current_working_place", e.target.value)}
                                        type="text"
                                    />
                                </div>

                                <div className="mt-4 border-2 p-4 rounded-3xl bg-slate-100">
                                    <Label>Availability</Label>
                                    <Input
                                        value={data.availability}
                                        onChange={(e) => setData("availability", e.target.value)}
                                        type="text"
                                    />

                                    <Label>Charges (First Appointment)</Label>
                                    <Input
                                        value={data.charges_first_appointment}
                                        onChange={(e) => setData("charges_first_appointment", e.target.value)}
                                        type="number"
                                    />

                                    <Label>Follow Up Charges</Label>
                                    <Input
                                        value={data.charges_follow_up}
                                        onChange={(e) => setData("charges_follow_up", e.target.value)}
                                        type="number"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg"
                                >
                                    Register
                                </button>
                            </form>
                        </Tilt>
                    </div>
                </div>
            </div>
            <EditDoctorData/>
        </>
    );
};

export default DoctorData;

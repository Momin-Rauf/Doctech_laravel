import React from "react";
import Tilt from "react-parallax-tilt";
import { Head } from "@inertiajs/react";
import SideBar from "./SideBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@inertiajs/inertia-react";
const UserData = ({ click, Click }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        address: "",
        phone_no: undefined,
        cnic: undefined,
        age: undefined,
        blood_group: "A+",
        sex: "Male",
        married_status: "single",
        email: "",
        password: "",
        role: "patient",
        PatientId: undefined,
        DoctorId: undefined,
    });

    const dataSubmit = (e) => {
        e.preventDefault();
        post(route("admin.create"));
    };

    const Treatment = (e) => {
        e.preventDefault();
        post(route("treatment"));
    };
    return (
        <>
            <Head title="Admin" />
            <div className="flex flex-col h-[20vh]">
                <div id="sidebar" className="w-[100%] flex flex-row ">
                    {click && <SideBar />}
                    <div className="flex flex-col drop-shadow-xl justify-center items-center" >
                        <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={1.5}>
                            <form 
                                onSubmit={dataSubmit}
                                className="p-5  m-5  rounded-lg"
                            >
                               <div className="flex flex-row gap-10" >
                               <Label>First Name</Label>
                                <Input
                                    value={data.name}
                                    onChange={(e) => {
                                        setData("name", e.target.value);
                                    }}
                                    text="text"
                                />

                                <Label>Email:</Label>
                                <Input
                                    value={data.email}
                                    onChange={(e) => {
                                        setData("email", e.target.value);
                                    }}
                                    text="email"
                                />

                               
                               </div>
                              <div className="flex flex-row mt-5 gap-10" >
                              <Label>Password</Label>
                                <Input
                                    value={data.password}
                                    onChange={(e) => {
                                        setData("password", e.target.value);
                                    }}
                                    text="password"
                                />
                                <Label>CNIC:</Label>
                                <Input
                                    value={data.cnic}
                                    onChange={(e) => {
                                        setData("cnic", e.target.value);
                                    }}
                                    text="number"
                                />

<Label>Age</Label>
                                <Input
                                    onChange={(e) => {
                                        setData("age", e.target.value);
                                    }}
                                    value={data.age}
                                    text="number"
                                />
                              </div>

                                

                                

                               <div className="flex flex-row gap-10 mt-5" >
                               <Label>Phone:</Label>
                                <Input
                                    value={data.phone_no}
                                    onChange={(e) => {
                                        setData("phone_no", e.target.value);
                                    }}
                                    type="number"
                                />

                                <Label>DOB:</Label>
                                <Input
                                    value={data.DOB}
                                    onChange={(e) => {
                                        setData("DOB", e.target.value);
                                    }}
                                    type="date"
                                />

                                <Label>Sex:</Label>
                                <select className="rounded-md"
                                    name="sex"
                                    id="sex"
                                    onChange={(e) => {
                                        setData("sex", e.target.value);
                                    }}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                               </div>



                                    <div className="flex flex-row mt-5 gap-10" >
                                    <Label>Blood Group:</Label>
                                <select className="rounded-md p-2"
                                    name="Blood group"
                                    id="blood group"
                                    onChange={(e) => {
                                        setData("blood_group", e.target.value);
                                    }}
                                >
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="O-">O-</option>
                                    <option value="O+">O+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="AB+">AB+</option>
                                </select>

                                <Label htmlFor="">Married:</Label>
                                <input
                                    type="radio"
                                    id="html"
                                    name="married_status"
                                    onChange={(e) => {
                                        setData(
                                            "married_status",
                                            e.target.value
                                        );
                                    }}
                                    value="married"
                                    
                                />
                                <Label htmlFor="html">Yes</Label>
                                <input
                                    type="radio"
                                    id="no"
                                    name="married_status"
                                    onChange={(e) => {
                                        setData(
                                            "married_status",
                                            e.target.value
                                        );
                                    }}
                                    value="single"
                                />
                                    </div>
                                
                                
                                <Label htmlFor="no">No</Label>

                                <Label>Address</Label>
                                <textarea className="mt-5 rounded-lg"
                                    value={data.address}
                                    onChange={(e) => {
                                        setData("address", e.target.value);
                                    }}
                                    row="2"
                                    col="2"
                                    span="2"
                                ></textarea>

                                <button className="rounded-md p-2 bg-blue-900 m-4 text-white" type="submit">Register</button>
                            </form>
                        </Tilt>

                        <form className="flex flex-col mb-2" onSubmit={Treatment}>
                            <div className="flex flex-row" >
                            For Doctor Treatment Table
                            <Label>Patient ID:</Label>
                            <Input
                                value={data.PatientId}
                                onChange={(e) => {
                                    setData("PatientId", e.target.value);
                                }}
                                text="text"
                            />
                            <Label>Doctor ID:</Label>
                            <Input
                                value={data.DoctorId}
                                onChange={(e) => {
                                    setData("DoctorId", e.target.value);
                                }}
                                text="text"
                            />
                            </div>
                            <button type="submit" className="rounded-md p-2 w-24 bg-blue-900 m-4 text-white" >add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserData;

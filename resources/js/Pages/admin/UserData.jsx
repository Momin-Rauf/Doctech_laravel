import React, { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EditUser from "./EditUser.jsx";
import Show_patients from "./show_patients.jsx";

const UserData = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        address: "",
        phone_no: "",
        cnic: "",
        age: "",
        blood_group: "A+",
        sex: "Male",
        married_status: "single",
        email: "",
        password: "",
        role: "patient",
        PatientId: "",
        DoctorId: "",
    });

    const dataSubmit = (e) => {
        e.preventDefault();
        post(route("admin.create"), {
            onSuccess: () => {
                toast.success('User successfully registered!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                reset();
            },
            onError: () => {
                toast.error('There was an error registering the user.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    };

    const Treatment = (e) => {
        e.preventDefault();
        post(route("treatment"), {
            onSuccess: () => {
                toast.success('Treatment successfully added!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                reset();
            },
            onError: () => {
                toast.error('There was an error adding the treatment.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    };

    // Create references for each section
    const userDataRef = useRef(null);
    const editUserRef = useRef(null);
    const showPatientsRef = useRef(null);

    // Function to scroll to a section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Head title="Admin" />
            <ToastContainer />
            <div className="mt-4 ">

                <div className="flex justify-center space-x-4 p-3 rounded-2xl bg-teal-500 ">
                    <button
                        className="bg-slate-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600"
                        onClick={() => scrollToSection(userDataRef)}
                    >
                        Register User
                    </button>
                    <button
                        className="bg-slate-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600"
                        onClick={() => scrollToSection(editUserRef)}
                    >
                        Edit User
                    </button>
                    <Link
                        className="bg-slate-700 text-white p-2 rounded-lg hover:scale-105 hover:bg-blue-600"
                        href={route("admin.AllpatientsViewPage")}
                    >
                        Show Patients
                    </Link>
                </div>

                <div ref={userDataRef} id="main-content">
                    <div>
                        <form onSubmit={dataSubmit} className="w-[1230px] bg-slate-200 mt-3 rounded-lg shadow-md shadow-black p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div>
                                    <Label>First Name</Label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                        type="text"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>Email</Label>
                                    <Input
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                        type="email"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>Password</Label>
                                    <Input
                                        value={data.password}
                                        onChange={(e) => setData("password", e.target.value)}
                                        type="password"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>CNIC</Label>
                                    <Input
                                        value={data.cnic}
                                        onChange={(e) => setData("cnic", e.target.value)}
                                        type="text"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>Age</Label>
                                    <Input
                                        value={data.age}
                                        onChange={(e) => setData("age", e.target.value)}
                                        type="number"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>Phone</Label>
                                    <Input
                                        value={data.phone_no}
                                        onChange={(e) => setData("phone_no", e.target.value)}
                                        type="text"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>DOB</Label>
                                    <Input
                                        value={data.DOB}
                                        onChange={(e) => setData("DOB", e.target.value)}
                                        type="date"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>Sex</Label>
                                    <select
                                        value={data.sex}
                                        onChange={(e) => setData("sex", e.target.value)}
                                        className="w-full rounded-md p-2 bg-slate-300"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <Label>Blood Group</Label>
                                    <select
                                        value={data.blood_group}
                                        onChange={(e) => setData("blood_group", e.target.value)}
                                        className="w-full rounded-md p-2 bg-slate-300"
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
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Label>Married</Label>
                                    <input
                                        type="radio"
                                        name="married_status"
                                        value="married"
                                        checked={data.married_status === "married"}
                                        onChange={(e) => setData("married_status", e.target.value)}
                                        className="form-radio text-blue-600"
                                    />
                                    <Label>Yes</Label>
                                    <input
                                        type="radio"
                                        name="married_status"
                                        value="single"
                                        checked={data.married_status === "single"}
                                        onChange={(e) => setData("married_status", e.target.value)}
                                        className="form-radio text-blue-600"
                                    />
                                    <Label>No</Label>
                                </div>
                                <div className="col-span-2">
                                    <Label>Address</Label>
                                    <textarea
                                        value={data.address}
                                        onChange={(e) => setData("address", e.target.value)}
                                        rows="2"
                                        className="w-full rounded-lg p-2 bg-slate-300"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="w-[10%] text-white rounded-md p-3 bg-blue-900 hover:bg-blue-700 transition-colors">
                                Register
                            </button>
                        </form>
                    </div>

                    <div className="bg-slate-200 shadow-black mt-4 p-6 rounded-lg shadow-md w-11/12 max-w-4xl">
                        <form onSubmit={Treatment} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <Label>Patient ID</Label>
                                    <Input
                                        value={data.PatientId}
                                        onChange={(e) => setData("PatientId", e.target.value)}
                                        type="text"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Label>Doctor ID</Label>
                                    <Input
                                        value={data.DoctorId}
                                        onChange={(e) => setData("DoctorId", e.target.value)}
                                        type="text"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="w-full rounded-md p-3 bg-blue-900 text-white hover:bg-blue-700 transition-colors">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div ref={editUserRef}>
                <EditUser />
            </div>
            
        </>
    );
};

export default UserData;

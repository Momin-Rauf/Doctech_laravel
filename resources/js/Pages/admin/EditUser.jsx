import React from 'react';
import Tilt from 'react-parallax-tilt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Head } from '@inertiajs/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from '@inertiajs/inertia-react';

const EditUser = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        address: "",
        phone_no: undefined,
        cnic: undefined,
        age: undefined,
        blood_group: 'A+',
        sex: 'Male',
        married_status: 'single',
        email: '',
        password: '',
        role: 'patient',
        pid: '',
        DOB: '',
        date: ''
    });

    const dataSubmit = (e) => {
        e.preventDefault();
        post(route('admin.updateData'), {
            onSuccess: () => {
                toast.success('Data successfully edited!', {
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
                toast.error('There was an error editing the data.', {
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

    return (
        <>
            <Head title="Admin" />
            <ToastContainer />
            <h1 className='mt-12'>EDIT USER DATA</h1>
            <div className="h-[100vh] w-[1230px] p-5">
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={1.5} className="bg-slate-200 rounded-lg shadow-lg p-5">
                    <form onSubmit={dataSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <Label>Patient Id</Label>
                            <Input value={data.pid} onChange={(e) => { setData('pid', e.target.value) }} type='text' />
                        </div>
                        <div>
                            <Label>Name</Label>
                            <Input value={data.name} onChange={(e) => { setData('name', e.target.value) }} type='text' />
                        </div>
                        <div>
                            <Label>Email:</Label>
                            <Input value={data.email} onChange={(e) => { setData('email', e.target.value) }} type='email' />
                        </div>
                        <div>
                            <Label>Password</Label>
                            <Input value={data.password} onChange={(e) => { setData('password', e.target.value) }} type='password' />
                        </div>
                        <div>
                            <Label>CNIC:</Label>
                            <Input value={data.cnic} onChange={(e) => { setData('cnic', e.target.value) }} type='number' />
                        </div>
                        <div>
                            <Label>DOB</Label>
                            <Input value={data.DOB} onChange={(e) => { setData('DOB', e.target.value) }} type='date' />
                        </div>
                        <div>
                            <Label>Age</Label>
                            <Input value={data.age} onChange={(e) => { setData('age', e.target.value) }} type='number' />
                        </div>
                        <div>
                            <Label>Registration Date</Label>
                            <Input value={data.date} onChange={(e) => { setData('date', e.target.value) }} type='date' />
                        </div>
                        <div>
                            <Label>Father Name</Label>
                            <Input type='text' />
                        </div>
                        <div>
                            <Label>Phone:</Label>
                            <Input value={data.phone_no} onChange={(e) => { setData('phone_no', e.target.value) }} type='number' />
                        </div>
                        <div>
                            <Label>Sex:</Label>
                            <select value={data.sex} onChange={(e) => { setData('sex', e.target.value) }} className="w-full p-2 rounded-lg">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <Label>Blood Group:</Label>
                            <select value={data.blood_group} onChange={(e) => { setData('blood_group', e.target.value) }} className="w-full p-2 rounded-lg">
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
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                            <Label>Married:</Label>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    id="married_yes"
                                    name="married_status"
                                    onChange={(e) => { setData('married_status', e.target.value) }}
                                    value="married"
                                    checked={data.married_status === "married"}
                                />
                                <Label htmlFor="married_yes">Yes</Label>
                                <Input
                                    type="radio"
                                    id="married_no"
                                    name="married_status"
                                    onChange={(e) => { setData('married_status', e.target.value) }}
                                    value="single"
                                    checked={data.married_status === "single"}
                                />
                                <Label htmlFor="married_no">No</Label>
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                            <Label>Address</Label>
                            <textarea value={data.address} onChange={(e) => { setData('address', e.target.value) }} rows="2" className="w-full p-2 rounded-lg" />
                        </div>
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                            <button 
       type="submit" className=" w-[10%] p-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Register
                            </button>
                        </div>
                    </form>
                </Tilt>
            </div>
        </>
    );
}

export default EditUser;

import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Tilt from "react-parallax-tilt";
import { FaEdit } from "react-icons/fa";
import {Link as ScrollLink } from 'react-scroll';
import UserCard from "./UserCard";
import "./style.css";
import Hand from "../images/hand .png";
import brain from "../images/brain.png";
import UpdateProfileInformation from "../Profile/Partials/UpdateProfileInformationForm";
import { Button } from "@/Components/ui/button";
import UpdatePasswordForm from "../Profile/Partials/UpdatePasswordForm";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import Booking from "./Booking";
import UpdateProfileInformationForm from "../Profile/Partials/UpdateProfileInformationForm";
import { CiUser } from "react-icons/ci";
import {

    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SlCalender } from "react-icons/sl";
import { Input } from "@/components/ui/input";

import { useForm } from "@inertiajs/inertia-react";

import BookAppointment from "./BookAppointment";

const PatientHomepage = ({
    user,
    userData,
    Bp,
    Sugar,
    prescriptions,
    mustVerifyEmail,
    status,
    appointments,
    doctorData,
    doctor,
}) => {
  console.log(appointments);
    const [User, setUser] = useState([]);
    const [BpReadings, setBpReadings] = useState([]);
    const [SugarLevels, setSugarLevels] = useState([]);
    const [Prescriptions, setPrescriptions] = useState([]);
    const [UserData, setUserData] = useState([]);
    const { data, setData, post, processing, errors, reset } = useForm({
        id: "",
        SugarDate: "",
        BpDate: "",
        Time: "",
        SugarValue: "",
        Diastolic: "",
        Systolic: "",
    });

    useEffect(() => {
        const fetch = () => {
            setUser(user);
            setUserData(userData);
            setBpReadings(Bp);
            setSugarLevels(Sugar);
            setPrescriptions(prescriptions);
        };

        fetch();
    }, [user, userData, Bp, Sugar, prescriptions]);

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("Bp"));
    };

    const submitHandlerSugar = (e) => {
        e.preventDefault();
        post(route("sugar"));
    };
    const [para, setPara] = useState("");

    const [colors, setColor] = useState("");
    let i = 0;
    useEffect(() => {
        let color = ["white", "yellow"];
        let words = [
            "Book your Appointment",
            "Track your Health",
            "Chat with experts",
        ];
        let i = 0;
        let x = 0;
        const intervalId = setInterval(() => {
            setPara(words[i]);
            setColor(color[x]);
           
            x = (x + 1) % color.length;
            i = (i + 1) % words.length;
        }, 2000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-[#172545]  h-[100vh]">
            <div className="h-[100vh] text-white flex flex-row-reverse gap-10 p-4 ">
                <div>
                    <h1 className="md:top-[20%] md:left-[40%] md:absolute absolute top-[20%] left-[20%] text-[60px]  md:pb-2 md:text-[86px] md:no-underline md:font-semibold md:tracking-tight  md:first:mt-0">
                        DOCTECH
                    </h1>
                    <h2
                        style={{ color: `${colors}` }}
                        className={`md:scroll-m-20 md:top-[40%] hidden md:block md:left-[40%] md:absolute md:border-b md:pb-2 md:text-3xl md:font-semibold md:tracking-tight  md:first:mt-0`}
                    >
                        {para}
                    </h2>
                </div>
                <img
                    src={Hand}
                    className="absolute left-10 animate-pulse"
                    alt=""
                />
                <img
                    id="brain"
                    src={brain}
                    className="absolute left-16 hidden md:block h-[400px] bottom-48 "
                    alt=""
                />

<ScrollLink to="appointment" delay={500} smooth={true}>
  <Button style={{ boxShadow: "0px 0px 2px white" }} className="md:absolute md:top-[70%] md:left-[40%] top-[40%] absolute  text-white  hover:text-black hover:bg-white right-[47%]" >Book Appointment</Button>
</ScrollLink>

                <div className="text-white  hover:text-gray-500 h-10" >
                    <Sheet>
                        <SheetTrigger>
                            <CiUser
                                style={{ boxShadow: "0px 0px 2px white" }}
                                className=" shadow-white rounded-[20px] w-10 h-10 p-2 hover:scale-105  "
                                size={40}
                            />
                            <b className="hover:underline transition-all underline-offset-4" />
                            
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>User</SheetTitle>
                                <SheetDescription>
                                    <UserCard UserData={UserData} User={User} />
                                    <Link className="bg-blue-900 text-white relative top-10 p-4 rounded-2xl" href={route('Logout')}>Logout</Link>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="text-white hover:text-gray-500  h-10" >
                    <Sheet>
                        <SheetTrigger>
                            <div className="flex justify-center items-center flex-col" >
                            <SlCalender 
                                href={route('showAppointment')}
                                style={{ boxShadow: "0px 0px 2px white" }}
                                className=" shadow-white  rounded-[20px]  w-14 h-10 p-2 hover:scale-105  "
                                size={40}
                            >

                            </SlCalender>
                            <b className="hover:underline transition-all underline-offset-4" >Appointments</b>
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Appointments</SheetTitle>
                                <SheetDescription>
                                    <Booking appointments={appointments} />
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex absolute  md:right-[35%] justify-center  items-center flex-col" >
                            <SlCalender 
                                href={route('showAppointment')}
                                style={{ boxShadow: "0px 0px 2px white" }}
                                className=" shadow-white  rounded-[20px]  w-14 h-10 p-2 hover:scale-105  "
                                size={40}
                            >

                            </SlCalender>
                            <Link href={route('chatify')} className="hover:underline transition-all underline-offset-4" >Chats</Link>
                            </div>


                <div className="hover:underline text-white hover:text-gray-500 h-10">
                    <Sheet>
                        <SheetTrigger>
                            <FaEdit
                                style={{ boxShadow: "0px 0px 2px white" }}
                                className=" shadow-white rounded-[20px] w-14 h-10 p-2 hover:scale-105  "
                                size={35}
                            />
                            <b className="hover:underline transition-all underline-offset-4" >Edit</b>
                            
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Update User Form</SheetTitle>
                                <SheetDescription>
                                    <Tabs
                                        defaultValue="account"
                                        className="w-[400px]"
                                    >
                                        <TabsList>
                                            <TabsTrigger value="account">
                                                Account
                                            </TabsTrigger>
                                            <TabsTrigger value="password">
                                                Password
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="account">
                                            <UpdateProfileInformationForm />
                                        </TabsContent>
                                        <TabsContent value="password">
                                            <UpdatePasswordForm />
                                        </TabsContent>
                                    </Tabs>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="p-4 text-white  bg-[#20315b] ">
                <h1>Blood presure</h1>
                <Table>
                    <TableCaption>Blood Pressure Chart.</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-black text-white">
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Systolic</TableHead>
                            <TableHead className="text-left">
                                Diastolic
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {BpReadings.map((reading) => (
                            <TableRow key={reading.id} className="border-t">
                                <TableCell className="font-medium ">
                                    {reading.date}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.time}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.systolic}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.diastolic}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Drawer>
                    <DrawerTrigger><Button>Add Blood Pressure</Button></DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>
                                Please Add Blood Pressure Data:
                            </DrawerTitle>
                            <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <form onSubmit={submitHandler}>
                            <DrawerFooter>
                                <Label htmlFor="diastolic">Systolic</Label>
                                <Input
                                    value={data.Systolic}
                                    onChange={(e) => {
                                        setData("Systolic", e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Systolic"
                                />

                                <Label htmlFor="systolic">Diastolic</Label>
                                <Input
                                    value={data.Diastolic}
                                    onChange={(e) => {
                                        setData("Diastolic", e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Diastolic"
                                />
                                <input
                                    value={data.BpDate}
                                    onChange={(e) => {
                                        setData("BpDate", e.target.value);
                                    }}
                                    type="date"
                                />
                                <input
                                    value={data.Time}
                                    onChange={(e) => {
                                        setData("Time", e.target.value);
                                    }}
                                    type="time"
                                />

                                <button
                                    type="submit"
                                    className="w-24 p-4 bg-blue"
                                >
                                    Submit{" "}
                                </button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </form>
                    </DrawerContent>
                </Drawer>
            </div>

            <div className="p-4 text-white  bg-[#20315b] ">
                <h1>Sugar</h1>
                <Table>
                    <TableCaption>Sugar Chart.</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-black text-white">
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Sugar level</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {SugarLevels.map((reading) => (
                            <TableRow key={reading.id} className="border-t">
                                <TableCell className="font-medium ">
                                    {reading.date}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.time}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.sugar_level}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Drawer>
                    <DrawerTrigger><Button>Add Sugar</Button></DrawerTrigger>
                    <DrawerContent className='bg-blue-600' >
                        <DrawerHeader className={'bg-blue-600'} >
                            <DrawerTitle>Please Add Sugar Data:</DrawerTitle>
                            <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <form className="rounded-full p-4" onSubmit={submitHandlerSugar}>
                            <DrawerFooter className='rounded-3xl flex flex-col bg-blue-400' >
                                <Label htmlFor="diastolic">Sugar level</Label>
                                <Input
                                    value={data.SugarValue}
                                    onChange={(e) => {
                                        setData("SugarValue", e.target.value);
                                    }}
                                    type="text"
                                    placeholder="value"
                                />

                                <input
                                    value={data.SugarDate}
                                    onChange={(e) => {
                                        setData("SugarDate", e.target.value);
                                    }}
                                    type="date"
                                />
                                <input
                                    value={data.Time}
                                    onChange={(e) => {
                                        setData("Time", e.target.value);
                                    }}
                                    type="time"
                                />

                                <button
                                    type="submit"
                                    className="w-24 px-4 py-2  bg-blue-900 rounded-full text-white "
                                >
                                    Submit{" "}
                                </button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </form>
                    </DrawerContent>
                </Drawer>
            </div>

            <div className="p-4 text-white  bg-[#20315b] ">
                <h1>Prescriptions</h1>
                <Table>
                    <TableCaption>Prescriptions</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-black text-white">
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Medicine Name</TableHead>
                            <TableHead>Medicine Dose</TableHead>

                            <TableHead>Medicine Frquency</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {prescriptions.map((reading) => (
                            <TableRow key={reading.id} className="border-t">
                                <TableCell className="font-medium ">
                                    {reading.created_at}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.medicine_name}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.dose}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {reading.done}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="bg-[#20315b] flex flex-col justify-center items-center" >
            <h2 className="scroll-m-20 border-b text-white pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Book your next appointment
    </h2>
              <BookAppointment  doctorData={doctorData} doctor={doctor} />
            
            </div>
        </div>
    );











};

export default PatientHomepage;

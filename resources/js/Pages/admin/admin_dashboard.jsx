import logo from "../images/logo.png";
import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function admin_dashboard() {
   

    return (
        <>
            <Head title="Admin Dashboard" />
            
                <div className="h-[100vh]">
                    <h1>Medical History</h1>
                </div>
                <div className="h-[100vh]">
                    Medical History
                </div>
            
        </>
    );
}

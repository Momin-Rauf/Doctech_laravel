import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import login from '../images/login.jpg'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <Link className='absolute z-10 left-2 top-2 bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-900 hover:text-white w-24 text-center' href={route('welcome')} >Back</Link>
           <div className='bg-[#e5ecf1] items-center flex justify-center   h-[100vh]  flex-row ' >
           <div className='flex justify-center w-[70%] p-5 items-center bg-white flex-row shadow-black shadow-md rounded-md' >
                
                <div className='w-[50%] h-[100%] ' ><img className='w-[100%]' src={login} alt="" /></div>
            
                   <form className='shadow-inner shadow-black p-20 rounded-md bg-[#e5ecf1]  '  onSubmit={submit}>
            <div>
            <h1 className='  font-bold text-[30px] hover:underline hover:scale-105 ml-[70px]' >LOGIN</h1>
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData('password', e.target.value)}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                    />
                    <span className="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div className="flex items-center justify-end mt-4">
                {canResetPassword && (
                    <Link
                        href={route('password.request')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Forgot your password?
                    </Link>
                )}

                <PrimaryButton className="ms-4" disabled={processing}>
                    Log in
                </PrimaryButton>
            </div>
        </form>
       </div>
           </div>
        </GuestLayout>
    );
}

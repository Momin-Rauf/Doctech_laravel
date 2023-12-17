import { Link, Head } from "@inertiajs/react";
import logo from './images/logo.png';
import FAQ from '../Components/FAQ'
import Card from "@/Components/Card";
import home from './images/home.mp4'
import Footer from "@/Components/Footer";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col p12 m-0   ">
                <div className="flex flex-row justify-between  h-[60px] shadow-sm text-[16px] text-white bg-[#404040]">
                    <img src={logo} alt="" />
                    <div className="my-auto mx-3" > <Link
                href={route("login")}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Log in
            </Link>
            
            <Link
                href={route("register")}
                className="font-semibold text-gray-600 ml-12 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Sign Up
            </Link>
            
            </div>
            
                </div>


                

                <div className='h-screen'>
        <h1 className="z-10 absolute font-bold top-[10%] underline text-[55px] left-10 font-sans" >DOCTECH</h1>
        <h2 className="z-10 absolute font-semibold top-[23%] text-[30px] left-10 font-sans" >Bridging the Gap Between Healthcare and Technology</h2><h2 className="z-10 absolute font-semibold top-[30%] text-[30px] left-10" > for a Seamless Patient Experience</h2>
    <video className='h-full w-full object-cover ' autoPlay muted loop src={home}>
    </video>
</div>

                <div className="h-[100vh] p-12 m-0 " >
                    <h2>Services</h2>
                        <Card/>
                        <Card/>
                        
                </div>
                <div className="h-[100vh] m-6 p-12" >
                    <h2>FAQ</h2>
                    <FAQ></FAQ>
                <FAQ></FAQ>
                </div>
                <Footer/>
                </div>
            
        </>
    );
}


import Image from 'next/image';
import logo from "@/assets/logo.png";
import Link from 'next/link';
import LinkFiles from '../clientComponents/LinkFiles';
import Hamburger from '../clientComponents/Hamburger';
import PlanSavedCount from './PlanSavedCount';

const Navbar = () => {
    return (
        <nav className='bg-[#0F1115] text-white'>
            <div className='container mx-auto grid items-center grid-cols-2 px-6 sm:px-0 py-5
            sm:grid-cols-3 
            '>
                {/*----------- from here to mobile phone---------- */}
                <div className='flex gap-5 relative'>
                    <div className='sm:hidden'>
                        <Hamburger></Hamburger>
                    </div>
                    <div className='flex gap-2 sm:justify-self-start'>
                        <Image src={logo} alt='web-logo' width={25} height={10}></Image>
                        <h2>FITLOG</h2>
                    </div>
                </div>
                {/*----------- until here to mobile phone---------- */}


                {/* for laptop */}
                <div className='hidden sm:flex gap-8 justify-self-center'>
                    <LinkFiles></LinkFiles>
                </div>

                <div className='justify-self-end flex gap-3'>
                    <PlanSavedCount></PlanSavedCount>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/logo.jpg'
import { NavberDropDrown } from './NavberDropDown';
const Navber = () => {
    return (
        <div>
             {/* if user not login  */}
         {/* <div className='flex justify-between  items-center px-10 py-2'>
            <div className='flex justify-between items-center gap-1'>
             <Image className='rounded-full' src={logo} alt='logo' width={50} height={50} ></Image>
             <h1 className='font-extrabold'>SportNest</h1>
            </div>
            <div className='flex justify-between items-center gap-5'>
             <Link className='font-semibold' href={'/'}>Home</Link>
             <Link className='font-semibold' href={'/all-facilities'}>All Facilities</Link>
            </div>
            <div>
             <button className='bg-green-800 px-5 py-1  rounded-2xl text-white text-lg font-semibold'>Login</button>
            </div>
        </div> */}

        {/* if user login */}
          <div className='flex justify-between  items-center px-20 py-2'>
            <div className='flex justify-between items-center gap-1'>
             <Image className='rounded-full' src={logo} alt='logo' width={50} height={50} ></Image>
             <h1 className='font-extrabold'>SportNest</h1>
            </div>
            <div className='flex justify-between items-center gap-5'>
            <Link className='font-semibold' href={'/'}>Home</Link>
            <Link className='font-semibold' href={'/all-facilities'}>All Facilities</Link>
            <Link className='font-semibold' href={'/'}>My Bookings</Link>
            <Link className='font-semibold' href={'/all-facilities'}>Add Facility</Link>
            <Link className='font-semibold' href={'/all-facilities'}>Manage My Facilities</Link>
            </div>
            <div>
             <NavberDropDrown></NavberDropDrown>
            </div>
        </div>

        </div>
       
      
    );
};

export default Navber;
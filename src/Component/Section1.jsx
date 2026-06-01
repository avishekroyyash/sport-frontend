import Image from 'next/image';
import React from 'react';
import allimg from '../../public/all-sport-element.jpg'
const Section1 = () => {
    return (
        <div className='mx-auto border-2 my-5 bg-gray-200 p-5 container mx-auto'>
            <h1 className='font-bold text-5xl text-center mt-5'>Why Choose SportNest</h1>
            <p className='font-medium text-md text-center my-5'>We simplify sports facility booking by connecting players with top-quality venues through a fast and reliable platform.</p>
            <div className='flex items-center justify-evenly'>
                <div>
                    <Image className='rounded-2xl' src={allimg} alt='sport' width={500} height={300} ></Image>
                </div>
                <div className=' p-3'>
                    <h1 className='font-bold text-2xl'>1. Easy Booking</h1>
                    <p className='text-gray-500 mb-3'>Book your favorite sports facility in just a few clicks.</p>

                    <h1 className='font-bold text-2xl'>2.Verified Venues</h1>
                    <p className='text-gray-500 mb-3'>Access trusted and well-maintained sports facilities.</p>

                    <h1 className='font-bold text-2xl'>3.Instant Confirmation</h1>
                    <p className='text-gray-500'>Receive real-time booking confirmations and updates.</p>



                </div>
            </div>
        </div>
    );
};

export default Section1;
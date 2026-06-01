import Image from 'next/image';
import React from 'react';
import sportpic from '../../public/sportnest3.jpg'
const Section5 = () => {
    return (
        <div className='flex justify-center gap-10  items-center p-3 my-5 container mx-auto'>
            <div className=' max-w-150 items-center p-3 space-y-3' >
                <h1 className='font-bold text-4xl'>About SportNest</h1>
                <p className='text-gray-700 text-lg' >SportNest is a modern Sports Facility Booking Management System designed to connect sports enthusiasts with quality sports venues. Whether you're looking for a football field, cricket ground, badminton court, or tennis arena, SportNest makes finding and booking facilities simple, fast, and reliable.
                    Our platform helps players, teams, and organizations discover available venues, compare options, and reserve their preferred facilities with just a few clicks. SportNest aims to make sports more accessible by streamlining the entire booking process.</p>
            </div>
            <div>
                <Image className='rounded-2xl ' src={sportpic} alt='sportnest' width={600} height={600}></Image>
            </div>
        </div>
    );
};

export default Section5;
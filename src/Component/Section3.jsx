import Image from 'next/image';
import React from 'react';
import allimg from '../../public/all-sport-2.jpg'
const Section3 = () => {
  return (
    <div className='flex gap-10 p-5 container mx-auto ' >

      <div >
        <Image src={allimg} alt='all-img' width={500} height={300}></Image>
      </div>
      <div className='flex flex-col gap-5' >
        <div className='border-2 p-3 bg-gray-200 rounded-2xl'>
          <h1 className='text-xl font-bold'> Our Mission</h1>
          <p className='text-gray-700'>To empower sports communities by providing a reliable digital platform that simplifies facility discovery, booking, and management for players, teams, and venue owners.</p>
        </div>
        <div className='border-2 p-3 bg-gray-200 rounded-2xl'>
          <h1 className='text-xl font-bold'> Our Vision</h1>
          <p className='text-gray-700'>To become the leading sports facility booking platform, making sports participation more accessible, organized, and enjoyable for everyone.</p>
        </div>
        <div className='border-2 p-3 bg-gray-200 rounded-2xl'>
          <h1 className='text-xl font-bold'>Our Goal</h1>
          <p className='text-gray-700'>We aim to bridge the gap between sports enthusiasts and quality sports facilities by providing a seamless and efficient booking platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
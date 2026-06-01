import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto'>
      <div className="bg-[url('/banner.jpg')] bg-cover bg-center h-[500px] my-5 ">
        <h1 className='text-white font-bold text-7xl text-center shadow-2xl pt-15 '>Book Your Favorite Sports Facilities Anytime, Anywhere</h1>
        <p className='text-gray-200 text-center shadow-2xl mx-auto pt-7 max-w-[700px]'>SportNest makes it easy to discover, book, and manage sports facilities. Find the perfect venue for football, cricket, badminton, tennis, and more with a seamless online booking experience.</p>
        <div className='flex justify-center items-center gap-7 pt-6'>
          <button className='bg-gray-300 hover:bg-gray-100 text-black rounded-2xl font-bold px-6 py-2'>Explore Facilities</button>
          <button className='bg-gray-300 hover:bg-gray-100 text-black rounded-2xl font-bold px-7 py-2'>Add Facility </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
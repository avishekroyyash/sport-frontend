import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto px-4'>
      
      <div className="relative bg-[url('/banner.jpg')] bg-cover bg-center h-[550px] my-6 rounded-3xl overflow-hidden">

        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 via-green-800/60 to-green-700/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <h1 className='text-white font-extrabold text-4xl md:text-6xl leading-tight max-w-5xl'>
            Book Your Favorite Sports Facilities <br /> Anytime, Anywhere
          </h1>

          <p className='text-green-50 text-base md:text-lg mt-6 max-w-2xl'>
            SportNest makes it easy to discover, book, and manage sports facilities.
            Find the perfect venue for football, cricket, badminton, tennis, and more
            with a seamless online booking experience.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-8'>

            <button className='bg-white text-green-800 font-bold px-7 py-3 rounded-full shadow-md hover:bg-green-100 transition'>
              Explore Facilities
            </button>

            <button className='bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow-md hover:bg-green-700 transition'>
              Add Facility
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner;
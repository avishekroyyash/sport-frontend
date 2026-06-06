import React from 'react';
import Image from "next/image";
import Link from 'next/link';
 import {Label, SearchField} from "@heroui/react";
import Search from '@/Component/Search';
import Filter from '@/Component/Filter';

const AllFacility = async({searchParams}) => {
     
  const sparam = await searchParams
const search = sparam?.search?.trim() || ''

const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_API}/my-facility${search ? `?search=${encodeURIComponent(search)}` : ''}`
)
    const allData = await res.json()
    //  console.log(allData,'this is all facility data ')
    return (
        <div className='container mx-auto ' >
        {/* Add search implementation */}
        <h1 className="my-3 text-center text-5xl font-bold">
    All Facilities
  </h1>

  <p className="mb-6 text-center text-gray-500">
    Discover and book the perfect sports facility for your game.
  </p>
        <Search></Search>
        {/* <Filter></Filter> */}
           
           <div className='grid grid-cols-3 gap-10 '>
            {
                allData.map((item,index)=>  <div key={index} className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="overflow-hidden max-w-125 max-h-75">
        <Image
          src={item.image}
          alt="Facility"
          width={500}
          height={300}
          className=""
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Category & Price */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            {item.facilityType}
          </span>

          <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-bold text-white">
            ${item.pricePerHour}/hr
          </span>
        </div>

        {/* Facility Name */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {item.facilityName}
          </h2>
          <p className="mt-1 text-gray-500">
           {item.location}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2  py-1 text-gray-600">
          <div className="flex justify-between">
            <span>Capacity</span>
            <span className="font-semibold">{item.capacity} Players</span>
          </div>

          <div className="flex justify-between">
            <span>Available Slots</span>
            <span className="font-semibold text-green-600">
              {item.availableTimeSlots.length} Slots
            </span>
          </div>
        </div>

        {/* Button */}
       <Link href={`/all-facility/${item._id}`} >   <button className="w-full rounded-xl bg-linear-to-r from-green-500 to-emerald-600 py-3 text-lg font-bold text-white transition-all duration-300 hover:from-green-600 hover:to-emerald-700">
          Book Now
        </button></Link>
      </div>
    </div> )
            }
           </div>
           
        </div>
    );
};

export default AllFacility;
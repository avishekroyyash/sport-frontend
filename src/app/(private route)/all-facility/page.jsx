import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Search from '@/Component/Search';
// import Filter from '@/Component/Filter';

export const metadata = {
  title: "All facility",
  description: "This is the sportnest booking all facility page",
};



const AllFacility = async({searchParams}) => {
     
  const sparam = await searchParams
const search = sparam?.search?.trim() || ''

const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_API}/my-facility${search ? `?search=${encodeURIComponent(search)}` : ''}`
)
    const allData = await res.json()
    //  console.log(allData,'this is all facility data ')
    return (
       <div className="container mx-auto px-4 py-6">
  {/* Heading */}
  <h1 className="mb-3 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
    All Facilities
  </h1>

  <p className="mb-6 text-center text-sm text-gray-500 md:text-base">
    Discover and book the perfect sports facility for your game.
  </p>

  <Search />

  {/* Facilities Grid */}
  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {allData.map((item, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-3xl bg-white shadow-lg flex flex-col"
      >
        {/* Image */}
        <div className="relative h-52 sm:h-60 md:h-56 lg:h-60">
          <Image
            src={item.image}
            alt={item.facilityName}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Type & Price */}
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 md:text-sm">
              {item.facilityType}
            </span>

            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white md:text-sm">
              ${item.pricePerHour}/hr
            </span>
          </div>

          {/* Facility Info */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              {item.facilityName}
            </h2>

            <p className="mt-1 text-sm text-gray-500 md:text-base">
              {item.location}
            </p>
          </div>

          {/* Details */}
          <div className="mb-5 space-y-2 text-sm text-gray-600 md:text-base">
            <div className="flex justify-between">
              <span>Capacity</span>
              <span className="font-semibold">
                {item.capacity} Players
              </span>
            </div>

            <div className="flex justify-between">
              <span>Available Slots</span>
              <span className="font-semibold text-green-600">
                {item.availableTimeSlots.length} Slots
              </span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-auto">
            <Link href={`/all-facility/${item._id}`}>
              <button className="w-full rounded-xl bg-green-600 py-3 text-sm font-bold text-white md:text-base">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    );
};

export default AllFacility;
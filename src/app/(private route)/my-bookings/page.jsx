import Image from "next/image";
import React from "react";
import testpic from "../../../../public/all-sport-element.jpg";

const MyBookingsPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-booking`)
  const allBookingData = await res.json()
  console.log(allBookingData,'this is all booking data')
  return (
    <div className="container mx-auto p-4">
     <div>
      {
        allBookingData.map((item,index) =>  <div key={index} className="flex flex-col md:flex-row items-center gap-10 rounded-3xl border-green-100 bg-white p-5 shadow-lg hover:shadow-xl border-2">
        
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt={item.facilityName}
            width={220}
            height={180}
            className="h-[180px] w-[220px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-4">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-green-700">
                {item.facilityName}
              </h1>
              <p className="text-sm text-gray-500">
               {item.userName}
              </p>
            </div>

            <span className="mt-2 w-fit rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 md:mt-0">
             Pending
            </span>
          </div>

          {/* Booking Info */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Booking Date</p>
              <h2 className="font-semibold text-gray-800">
               {item.date}
              </h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Time Slot</p>
              <h2 className="font-semibold text-gray-800">
                04:00 PM - 06:00 PM
              </h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Hours</p>
              <h2 className="font-semibold text-gray-800">{item.hours} Hours</h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Total Price</p>
              <h2 className="font-semibold text-green-700">${item.totalPrice}</h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600">
            Enjoy a premium sports experience with world-class facilities,
            modern equipment, and a comfortable environment for players and
            teams.
          </p>
        </div>

        {/* Delete Button */}
        <div>
          <button className="rounded-xl bg-red-500 px-5 ml-35 py-3 font-medium text-white hover:bg-red-600">
            Delete Booking
          </button>
        </div>
      </div>)
      }
     </div>
    </div>
  );
};

export default MyBookingsPage;
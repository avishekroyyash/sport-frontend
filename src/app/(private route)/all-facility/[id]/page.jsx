

import Image from "next/image";

import React from "react";
import BookingForm from "@/Component/BookingForm";

const BookingDetaisPage = async ({params}) => {
  const {id} = await params
  // console.log(id,'this is params id ')
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-facility/${id}`)
   const Bdata = await res.json()
  //  console.log(Bdata)
  return (
    <div className="container mx-auto my-12 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
      {/* ================= LEFT SIDE DETAILS ================= */}
      <div className="rounded-3xl border border-green-200 bg-linear-to-b from-green-50 to-white p-6 shadow-sm space-y-6">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-green-200 shadow-sm">
          <Image
            src={Bdata.image}
            alt="facility"
            width={500}
            height={350}
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <div>
          <h2 className="text-3xl font-bold text-green-900">
           {Bdata.facilityName}
          </h2>
          <p className="text-gray-600 mt-1">📍 {Bdata.location}</p>
        </div>

        {/* Details Card */}
        <div className="rounded-2xl bg-white border border-green-100 p-5 space-y-4 shadow-sm">
          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-600 font-medium">Capacity</span>
            <span className="font-bold text-green-700">{Bdata.capacity}Players</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-600 font-medium">Available Slots</span>
            <span className="font-bold text-green-700">{Bdata.availableTimeSlots.length} Slots</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Category</span>
            <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
             {Bdata.facilityType}
            </span>
          </div>
        </div>

        {/* Price Box */}
        <div className="rounded-2xl bg-green-100 border border-green-200 p-5 flex justify-between items-center">
          <span className="text-green-900 font-semibold">Price per Hour</span>
          <span className="text-2xl font-bold text-green-700">${Bdata.pricePerHour}</span>
        </div>

        {/* Description */}
        <div className="text-gray-600 leading-7">
         {Bdata.description}
        </div>
      </div>

      {/* ================= RIGHT SIDE FORM ================= */}
      <div>
        <BookingForm Bdata={Bdata}></BookingForm>
      </div>
    </div>
  );
};

export default BookingDetaisPage;

import Image from "next/image";
import React from "react";
import BookingForm from "@/Component/BookingForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const { id } = await params;
   
    // Get token from server when user login
  const token = await auth.api.getToken({
    headers: await headers(),
  });

   const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/my-facility/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token?.token}`,
      },
    }
  );

  const Bdata = await res.json();
  // console.log(Bdata,'this is get from dynamic seo')
  
  return {
    title:  `${Bdata.facilityName} | SportNest`,
    description: Bdata.description,
  };
}

const BookingDetaisPage = async ({ params }) => {
  const { id } = await params;

  // Get token from server when user login
  const token = await auth.api.getToken({
    headers: await headers(),
  });

  // Fetch facility data by id
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/my-facility/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token?.token}`,
      },
    }
  );

  const Bdata = await res.json();

  return (
    <div className="container mx-auto my-6 grid grid-cols-1 gap-6 px-4 md:my-10 md:gap-8 lg:my-12 lg:grid-cols-2 lg:gap-10">
      {/* ================= LEFT SIDE DETAILS ================= */}
      <div className="space-y-4 rounded-3xl border border-green-200 bg-linear-to-b from-green-50 to-white p-4 shadow-sm md:space-y-5 md:p-5 lg:space-y-6 lg:p-6">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-green-200 shadow-sm">
          <Image
            src={Bdata.image}
            alt="facility"
            width={500}
            height={350}
            className="h-56 w-full object-cover md:h-72 lg:h-auto"
          />
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-green-900 md:text-3xl">
            {Bdata.facilityName}
          </h2>

          <p className="mt-1 text-gray-600">{Bdata.location}</p>
        </div>

        {/* Details Card */}
        <div className="space-y-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm md:p-5">
          <div className="flex items-center justify-between gap-4 border-b pb-3">
            <span className="font-medium text-gray-600">Capacity</span>

            <span className="font-bold text-green-700">
              {Bdata.capacity} Players
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 border-b pb-3">
            <span className="font-medium text-gray-600">
              Available Slots
            </span>

            <span className="font-bold text-green-700">
              {Bdata.availableTimeSlots.length} Slots
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="font-medium text-gray-600">Category</span>

            <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white">
              {Bdata.facilityType}
            </span>
          </div>
        </div>

        {/* Price Box */}
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-green-200 bg-green-100 p-4 md:p-5">
          <span className="font-semibold text-green-900">
            Price per Hour
          </span>

          <span className="text-xl font-bold text-green-700 md:text-2xl">
            ${Bdata.pricePerHour}
          </span>
        </div>

        {/* Description */}
        <div className="text-sm leading-6 text-gray-600 md:text-base md:leading-7">
          {Bdata.description}
        </div>
      </div>

      {/* ================= RIGHT SIDE FORM ================= */}
      <div className="w-full">
        <BookingForm Bdata={Bdata} />
      </div>
    </div>
  );
};

export default BookingDetaisPage;
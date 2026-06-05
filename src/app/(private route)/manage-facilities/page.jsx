import Image from "next/image";
import React from "react";
import { IoAdd } from "react-icons/io5";
import Link from "next/link";
import { DeleteModal } from "@/Component/DeleteModal";
import { EditModal } from "@/Component/EditModal";
const ManageFacilities = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-facility`);
  const allData = await res.json();
  // console.log(allData, "this is all facility data ");
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-5">
        <div>
          <h1 className="text-3xl font-bold ">Manage My Facilities</h1>
          <p className="text-gray-500">Edit or Remove your listed Facilities</p>
        </div>
        <Link href={'/add-facility'}><button className="bg-green-600 text-white px-3 py-1 rounded-2xl flex justify-center items-center gap-1 ">
         <IoAdd /> Add New
        </button></Link>
      </div>
      <div className="flex flex-col gap-5"> 
        {
          allData.map((item,index) =>  <div key={index} className="flex flex-col md:flex-row items-center gap-10 rounded-3xl  border-green-100 bg-white p-5 shadow-lg hover:shadow-xl border-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt="Facility Image"
            width={300}
            height={400}
            className="h-[250px] w-[250px] object-cover"
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
                Premium Indoor Sports Facility
              </p>
            </div>
          </div>

          {/* Booking Info */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Facility Type</p>
              <h2 className="font-semibold text-gray-800">{item.facilityType}</h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Location</p>
              <h2 className="font-semibold text-gray-800">
                {item.location}
              </h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Capacity</p>
              <h2 className="font-semibold text-gray-800">{item.capacity} Players</h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <p className="text-xs text-gray-500">Price Per Hour</p>
              <h2 className="font-semibold text-green-700"> ${item.pricePerHour}</h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3 col-span-2">
              <p className="text-xs text-gray-500 mb-1 ">Available Time Slots</p>
              {/*  */}
            <div className="grid grid-cols-2">
                {
                item.availableTimeSlots.map(((slot,index) =><h2 key={index} className="font-semibold text-gray-800 text-sm">
                {slot}
              </h2> ))
              }
            </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600">
           {item.description}
          </p>

            {/* Delete Button */}
        <div className="flex gap-10">
          <div>
           <EditModal item={item}></EditModal>
          </div>
          <div>
           <DeleteModal item={item}></DeleteModal>
          </div>
        </div>

        </div>

      
      </div>)
        }
      </div>
     
    </div>
  );
};

export default ManageFacilities;

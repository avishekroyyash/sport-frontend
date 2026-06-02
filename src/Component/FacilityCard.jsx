import React from "react";
import Image from "next/image";
import cardpic from "../../public/all-sport-2.jpg";

const FacilityCard = () => {
  return (
    <div className="group max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={cardpic}
          alt="Facility"
          width={400}
          height={300}
          className=""
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Category & Price */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Football
          </span>

          <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-bold text-white">
            ৳500/hr
          </span>
        </div>

        {/* Facility Name */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Sylhet Football Arena
          </h2>
          <p className="mt-1 text-gray-500">
            Tilagor, Sylhet
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2  py-1 text-gray-600">
          <div className="flex justify-between">
            <span>Capacity</span>
            <span className="font-semibold">22 Players</span>
          </div>

          <div className="flex justify-between">
            <span>Available Slots</span>
            <span className="font-semibold text-green-600">
              3 Slots
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 text-lg font-bold text-white transition-all duration-300 hover:from-green-600 hover:to-emerald-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FacilityCard;
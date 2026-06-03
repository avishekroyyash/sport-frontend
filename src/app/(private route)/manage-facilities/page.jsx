import Image from 'next/image';
import React from 'react';
import tespic1 from '../../../../public/all-sport-2.jpg'
const ManageFacilities = () => {
    return (
        <div className="container mx-auto p-4">
            <div className='flex justify-between mb-5'>
                <div>
                    <h1 className='text-3xl font-bold '>Manage My Facilities</h1>
                <p className='text-gray-500'>Edit or Remove your listed Facilities</p>
                </div>
                <button className='bg-green-600 text-white px-3 py-1 rounded-2xl '>Add New</button>
            </div>
             <div className="flex flex-col md:flex-row items-center gap-10 rounded-3xl border border-green-100 bg-white p-5 shadow-lg hover:shadow-xl border-2">
               
               {/* Image */}
               <div className="relative overflow-hidden rounded-2xl">
                 <Image
                   src={tespic1}
                   alt="Facility Image"
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
                       Sylhet Sports Arena
                     </h1>
                     <p className="text-sm text-gray-500">
                       Premium Indoor Sports Facility
                     </p>
                   </div>
       
                
                 </div>
       
                 {/* Booking Info */}
                 <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                   <div className="rounded-xl bg-green-50 p-3">
                     <p className="text-xs text-gray-500">Booking Date</p>
                     <h2 className="font-semibold text-gray-800">
                       15 June 2026
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
                     <h2 className="font-semibold text-gray-800">2 Hours</h2>
                   </div>
       
                   <div className="rounded-xl bg-green-50 p-3">
                     <p className="text-xs text-gray-500">Price</p>
                     <h2 className="font-semibold text-green-700">$40</h2>
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
                <div className='flex flex-col  ml-40 gap-15'>
                    <div>
                 <button className="rounded-xl bg-green-100 px-5  py-3 font-bold ">
                   Edit 
                 </button>
               </div>
               <div>
                 <button className="rounded-xl bg-red-500 px-5 py-3 font-medium text-white hover:bg-red-600">
                   Delete 
                 </button>
               </div>
                </div>
             </div>
           </div>
    );
};

export default ManageFacilities;
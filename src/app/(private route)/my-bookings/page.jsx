import Image from "next/image";
import React from "react";
import { DeleteBooking } from "@/Component/DeleteBooking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsPage = async() => {
  //since it is server component so 
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
 const user = session?.user
  // console.log(user.id,'this is id of user in my booking page')
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-booking/${user?.id}`)
  const allBookingData = await res.json()
  // console.log(allBookingData,'this is all booking data')
  return (
    <div className="container mx-auto p-4">
     <div>
      {
        allBookingData.map((item,index) => <div
  key={index}
  className="mb-4 flex flex-col gap-6 rounded-3xl border-2 border-green-100 bg-white p-5 shadow-lg transition-all hover:shadow-xl md:flex-row"
>
  {/* Image */}
  <div className="relative shrink-0 overflow-hidden rounded-2xl">
    <Image
      src={item.image}
      alt={item.facilityName}
      width={220}
      height={180}
      className="h-[180px] w-full md:w-[220px] object-cover"
    />
  </div>

  {/* Content */}
  <div className="flex-1 space-y-4">
    {/* Header */}
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-green-700">
          {item.facilityName}
        </h1>
        <p className="text-sm text-gray-500">{item.userName}</p>
      </div>

      <span className="w-fit rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
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

        <div className="mt-1 flex flex-wrap gap-1">
          {item.timeSlot.map((time, index) => (
            <span
              key={index}
              className="rounded-md bg-white px-2 py-1 text-xs font-medium text-green-700"
            >
              {time}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-green-50 p-3">
        <p className="text-xs text-gray-500">Hours</p>
        <h2 className="font-semibold text-gray-800">
          {item.hours} Hours
        </h2>
      </div>

      <div className="rounded-xl bg-green-50 p-3">
        <p className="text-xs text-gray-500">Total Price</p>
        <h2 className="font-bold text-green-700">
          ${item.totalPrice}
        </h2>
      </div>
    </div>

    {/* Description */}
    <p className="text-sm leading-relaxed text-gray-600">
      {item.description}
    </p>
  </div>

  {/* Action Section */}
  <div className="flex shrink-0 items-start justify-end md:min-w-[120px]">
    <DeleteBooking item={item} />
  </div>
</div>)
      }
     </div>
    </div>
  );
};

export default MyBookingsPage;
'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.jpg";
import { NavberDropDrown } from "./NavberDropDown";
import {  useSession } from "@/lib/auth-client";


const Navber =() => {

  
const {data} = useSession()
const user = data?.user
// console.log(user,'this is user');
  return (
    <div>

     {/* if user not login  */}
    
    {
      !user ? (<div className="border-b border-green-100 bg-white">
  <div className="container mx-auto flex items-center justify-between px-6 py-4">

   
    <div className="flex items-center gap-3">
      <Image
        className="rounded-full border border-green-200"
        src={logo}
        alt="SportNest Logo"
        width={52}
        height={52}
      />
      <div>
        <h1 className="text-2xl font-bold text-green-800">
          SportNest
        </h1>
        <p className="text-xs text-gray-500">
          Sports Facility Booking
        </p>
      </div>
    </div>

    
    <div className="flex items-center gap-8">
      <Link
        href="/"
        className="font-medium text-gray-700 hover:text-green-700"
      >
        Home
      </Link>

      <Link
        href="/all-facility"
        className="font-medium text-gray-700 hover:text-green-700"
      >
        All Facilities
      </Link>
    </div>

  
    <div>
     <Link href={'/login'}> <button className="rounded-xl bg-green-700 px-6 py-2.5 font-semibold text-white shadow-sm">
        Login
      </button></Link>
    </div>

  </div>
          </div>) :  (  
   <div>
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">

      <div className="container mx-auto px-6">

        <div className="flex justify-between items-center py-3">

       
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full border-2 border-green-600"
              src={logo}
              alt="logo"
              width={48}
              height={48}
            />

            <h1 className="text-2xl font-extrabold">
              <span className="text-green-700">Sport</span>
              <span className="text-gray-900">Nest</span>
            </h1>
          </div>

         
          <nav className="hidden md:flex items-center gap-6">

            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-green-700 transition"
            >
              Home
            </Link>

            <Link
              href="/all-facility"
              className="text-gray-700 font-medium hover:text-green-700 transition"
            >
              All Facilities
            </Link>

            <Link
              href="/my-bookings"
              className="text-gray-700 font-medium hover:text-green-700 transition"
            >
              My Bookings
            </Link>

            <Link
              href="/add-facility"
              className="text-gray-700 font-medium hover:text-green-700 transition"
            >
              Add Facility
            </Link>

            <Link
              href="/manage-facilities"
              className="text-gray-700 font-medium hover:text-green-700 transition"
            >
              Manage Facilities
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <NavberDropDrown user={user} />
          </div>

        </div>
    </div>
    </header>
      </div>
        )
    }
          

    
    </div>
  );
};

export default Navber;



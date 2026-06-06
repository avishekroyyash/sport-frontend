"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.jpg";
import { NavberDropDrown } from "./NavberDropDown";
import { useSession } from "@/lib/auth-client";

const Navber = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <div>
      {/* if user not login */}
      {!user ? (
        <div className="border-b border-green-100 bg-white">
          <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-3 sm:px-4 md:px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                className="rounded-full border border-green-200 w-10 h-10 md:w-[52px] md:h-[52px]"
                src={logo}
                alt="SportNest Logo"
                width={52}
                height={52}
              />

              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800">
                  SportNest
                </h1>

                <p className="hidden sm:block text-xs text-gray-500">
                  Sports Facility Booking
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
              <Link
                href="/"
                className="text-sm md:text-base font-medium text-gray-700 hover:text-green-700"
              >
                Home
              </Link>

              <Link
                href="/all-facility"
                className="text-sm md:text-base font-medium text-gray-700 hover:text-green-700"
              >
                All Facilities
              </Link>
            </div>

            {/* Login Button */}
            <div>
              <Link href="/login">
                <button className="rounded-xl bg-green-700 px-3 sm:px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-semibold text-white shadow-sm">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
            <div className="container mx-auto px-3 sm:px-4 md:px-6">
              <div className="flex justify-between items-center py-3">
                {/* Logo */}
                <div className="flex items-center gap-2 md:gap-3">
                  <Image
                    className="rounded-full border-2 border-green-600 w-10 h-10 md:w-12 md:h-12"
                    src={logo}
                    alt="logo"
                    width={48}
                    height={48}
                  />

                  <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
                    <span className="text-green-700">Sport</span>
                    <span className="text-gray-900">Nest</span>
                  </h1>
                </div>
                
                 <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
              <Link
                href="/"
                className="text-sm md:text-base font-medium text-gray-700 hover:text-green-700"
              >
                Home
              </Link>

              <Link
                href="/all-facility"
                className="text-sm md:text-base font-medium text-gray-700 hover:text-green-700"
              >
                All Facilities
              </Link>
            </div>
                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                  

                  <Link
                    href="/my-bookings"
                    className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-700 transition"
                  >
                    My Bookings
                  </Link>

                  <Link
                    href="/add-facility"
                    className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-700 transition"
                  >
                    Add Facility
                  </Link>

                  <Link
                    href="/manage-facilities"
                    className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-700 transition"
                  >
                    Manage Facilities
                  </Link>
                </nav>

                {/* User Dropdown */}
                <div className="flex items-center gap-4">
                  <NavberDropDrown user={user} />
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
    </div>
  );
};

export default Navber;

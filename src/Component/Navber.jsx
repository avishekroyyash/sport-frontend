import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.jpg";
import { NavberDropDrown } from "./NavberDropDown";

const Navber = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
      <div className="container mx-auto px-6">

        {/* Main Navbar */}
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
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

          {/* Navigation Links */}
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

          {/* User Dropdown */}
          <div className="flex items-center gap-4">
            <NavberDropDrown />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navber;
import Image from "next/image";
import React from "react";
import sportpic from "../../public/sportnest3.jpg";

const Section5 = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Content */}
        <div>
          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            About SportNest
          </span>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Simplifying Sports Facility Booking
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            SportNest is a modern Sports Facility Booking Management System
            designed to connect sports enthusiasts with quality sports venues.
            Whether you are looking for a football field, cricket ground,
            badminton court, or tennis arena, SportNest makes finding and
            booking facilities simple, fast, and reliable.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our platform helps players, teams, and organizations discover
            available venues, compare options, and reserve their preferred
            facilities with just a few clicks. We aim to make sports more
            accessible by streamlining the entire booking process.
          </p>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <h2 className="text-3xl font-bold text-green-700">100+</h2>
              <p className="mt-1 text-sm text-gray-600">
                Facilities
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <h2 className="text-3xl font-bold text-green-700">5K+</h2>
              <p className="mt-1 text-sm text-gray-600">
                Active Users
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <h2 className="text-3xl font-bold text-green-700">24/7</h2>
              <p className="mt-1 text-sm text-gray-600">
                Booking Access
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div>
          <Image
            src={sportpic}
            alt="SportNest"
            width={700}
            height={700}
            className="w-full rounded-3xl shadow-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Section5;
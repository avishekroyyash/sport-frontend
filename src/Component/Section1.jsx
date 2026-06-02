import Image from "next/image";
import React from "react";
import allimg from "../../public/all-sport-element.jpg";

const Section1 = () => {
  return (
    <section className="container mx-auto my-10 px-4">
      <div className="rounded-3xl bg-green-50 p-8 md:p-12 shadow-lg">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">
            Why Choose SportNest
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            We simplify sports facility booking by connecting players with
            top-quality venues through a fast, secure, and reliable platform.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Image */}
          <div className="lg:w-1/2">
            <Image
              className="rounded-3xl shadow-lg w-full"
              src={allimg}
              alt="sport"
              width={500}
              height={300}
            />
          </div>

          {/* Features */}
          <div className="lg:w-1/2 space-y-6">

            <div className="bg-white rounded-2xl p-5 border border-green-100">
              <h2 className="text-2xl font-bold text-green-800">
                1. Easy Booking
              </h2>
              <p className="mt-2 text-gray-600">
                Book your favorite sports facility in just a few clicks without
                complicated procedures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-green-100">
              <h2 className="text-2xl font-bold text-green-800">
                2. Verified Venues
              </h2>
              <p className="mt-2 text-gray-600">
                Access trusted and well-maintained sports facilities with
                complete transparency and reliability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-green-100">
              <h2 className="text-2xl font-bold text-green-800">
                3. Instant Confirmation
              </h2>
              <p className="mt-2 text-gray-600">
                Receive real-time booking confirmations and stay updated about
                your reservations instantly.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Section1;
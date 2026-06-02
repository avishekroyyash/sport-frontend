import Image from "next/image";
import React from "react";
import allimg from "../../public/all-sport-2.jpg";

const Section3 = () => {
  return (
    <section className="container mx-auto my-10 px-4">
     <div className="container mx-auto my-16 px-4">
  <div className="rounded-[40px] bg-gradient-to-br from-green-50 to-white p-8 lg:p-12">

    {/* Heading */}
    <div className="text-center mb-14">
      <h1 className="text-5xl font-bold text-gray-900">
        Mission, Vision & Goal
      </h1>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        The foundation that drives SportNest towards creating a better
        sports booking experience.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}
      <div className="relative">
        <Image
          src={allimg}
          alt="SportNest"
          className="rounded-[30px] w-full"
        />

        <div className="absolute -bottom-6 -right-6 bg-green-700 text-white px-8 py-5 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold">2026</h3>
          <p>Growing Sports Communities</p>
        </div>
      </div>

      {/* Right Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-green-200"></div>

        {/* Mission */}
        <div className="relative pl-16 pb-10">
          <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white font-bold">
            1
          </div>

          <h2 className="text-2xl font-bold text-green-800">
            Our Mission
          </h2>

          <p className="mt-2 text-gray-600 leading-7">
            To empower sports communities by providing a reliable
            digital platform that simplifies facility discovery,
            booking, and management.
          </p>
        </div>

        {/* Vision */}
        <div className="relative pl-16 pb-10">
          <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white font-bold">
            2
          </div>

          <h2 className="text-2xl font-bold text-green-800">
            Our Vision
          </h2>

          <p className="mt-2 text-gray-600 leading-7">
            To become the leading sports facility booking platform,
            making sports participation more accessible and enjoyable.
          </p>
        </div>

        {/* Goal */}
        <div className="relative pl-16">
          <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white font-bold">
            3
          </div>

          <h2 className="text-2xl font-bold text-green-800">
            Our Goal
          </h2>

          <p className="mt-2 text-gray-600 leading-7">
            To bridge the gap between sports enthusiasts and quality
            sports facilities through a seamless booking experience.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Section3;
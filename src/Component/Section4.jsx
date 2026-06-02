import React from "react";
import Image from "next/image";

import img1 from "../../public/joursey.jpg";
import img2 from "../../public/watch-foodball.jpg";
import img3 from "../../public/red-yello-card.jpg";
import img4 from "../../public/awar-football.jpg";

const Section4 = () => {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="rounded-[35px] bg-green-50 p-8 lg:p-12">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Why SportNest
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            What Makes{" "}
            <span className="text-green-700">SportNest</span> Special
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            More than just a booking platform, SportNest is designed to
            enhance the complete sports experience for players, teams,
            organizers, and venue owners.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Journey */}
          <div className="text-center">
            <div className="relative mx-auto w-fit">
              <div className="rounded-full bg-green-200 p-3">
                <Image
                  src={img1}
                  alt="Journey"
                  width={180}
                  height={180}
                  className="rounded-full h-[180px] w-[180px] object-cover"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-green-700 px-4 py-1 text-sm font-bold text-white">
                01
              </div>
            </div>

            <h3 className="mt-8 text-2xl font-bold text-green-800">
              Our Journey
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              SportNest began with a vision to simplify sports facility
              booking and continues helping athletes discover quality
              venues quickly and efficiently.
            </p>
          </div>

          {/* Timing */}
          <div className="text-center">
            <div className="relative mx-auto w-fit">
              <div className="rounded-full bg-green-200 p-3">
                <Image
                  src={img2}
                  alt="Timing"
                  width={180}
                  height={180}
                  className="rounded-full h-[180px] w-[180px] object-cover"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-green-700 px-4 py-1 text-sm font-bold text-white">
                02
              </div>
            </div>

            <h3 className="mt-8 text-2xl font-bold text-green-800">
              Flexible Timing
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Easily find and reserve facilities that match your schedule,
              helping players and teams enjoy hassle-free planning.
            </p>
          </div>

          {/* Cards */}
          <div className="text-center">
            <div className="relative mx-auto w-fit">
              <div className="rounded-full bg-green-200 p-3">
                <Image
                  src={img3}
                  alt="Cards"
                  width={180}
                  height={180}
                  className="rounded-full h-[180px] w-[180px] object-cover"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-green-700 px-4 py-1 text-sm font-bold text-white">
                03
              </div>
            </div>

            <h3 className="mt-8 text-2xl font-bold text-green-800">
              Red & Yellow Cards
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Support for tournament management and disciplinary records
              promotes fair play, sportsmanship, and organized competition.
            </p>
          </div>

          {/* Awards */}
          <div className="text-center">
            <div className="relative mx-auto w-fit">
              <div className="rounded-full bg-green-200 p-3">
                <Image
                  src={img4}
                  alt="Awards"
                  width={180}
                  height={180}
                  className="rounded-full h-[180px] w-[180px] object-cover"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-green-700 px-4 py-1 text-sm font-bold text-white">
                04
              </div>
            </div>

            <h3 className="mt-8 text-2xl font-bold text-green-800">
              Awards & Recognition
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Celebrate achievements by recognizing outstanding players,
              teams, and performances across sporting events and tournaments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
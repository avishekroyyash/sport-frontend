import Image from "next/image";
import React from "react";

import com1 from "../../public/company-1.jpg";
import com2 from "../../public/company-2.jpg";
import com3 from "../../public/company-7.png";
import com4 from "../../public/company-4.png";
import com5 from "../../public/company-5.png";
import com6 from "../../public/company-6.png";

const Section2 = () => {
  return (
    <section className="py-20 container mx-auto ">
      <div className="px-4">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-14">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Trusted Partnerships
          </span>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Trusted By Our Partners
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            SportNest proudly collaborates with organizations, sports clubs,
            institutions, and brands that share our commitment to improving
            sports accessibility and creating exceptional experiences for
            athletes and communities.
          </p>
        </div>

        {/* Partners */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Partner 1 */}
          <div className="rounded-3xl bg-green-100 border border-green-200 p-8">
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white">
              <Image
                src={com1}
                alt="Partner 1"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Partner 2 */}
          <div className="rounded-3xl bg-green-100 border border-green-200 p-8">
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white">
              <Image
                src={com2}
                alt="Partner 2"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Partner 3 */}
          <div className="rounded-3xl bg-green-100 border border-green-200 p-8">
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white">
              <Image
                src={com3}
                alt="Partner 3"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Partner 4 */}
          <div className="rounded-3xl bg-green-100 border border-green-200 p-8">
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white">
              <Image
                src={com4}
                alt="Partner 4"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Partner 5 */}
          <div className="rounded-3xl bg-green-100 border border-green-200 p-8">
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white">
              <Image
                src={com5}
                alt="Partner 5"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Partner 6 */}
          <div className="rounded-3xl bg-green-100 border border-green-200 p-8">
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white">
              <Image
                src={com6}
                alt="Partner 6"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-14 text-center">
          <p className="text-lg font-medium text-gray-700">
            Building stronger sports communities through trusted partnerships.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section2;
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-green-800 to-green-950 text-white mt-16 container mx-auto">

      <div className="container mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-green-200">
              Features
            </h3>

            <div className="space-y-3 text-green-50">
              <p>Enterprise Solutions</p>
              <p>Security & Protection</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-green-200">
              Quick Links
            </h3>

            <div className="space-y-3 text-green-50">
              <p>Home</p>
              <p>Facilities</p>
              <p>Bookings</p>
              <p>Dashboard</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-green-200">
              Contact
            </h3>

            <div className="space-y-3 text-green-50">
              <p>Dhaka, Bangladesh</p>
              <p>support@sportnest.com</p>
              <p>+880 1234-567890</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-green-200">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700">
                <FaFacebookF size={18} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700">
                <FaInstagram size={18} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700">
                <FaTwitter size={18} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700">
                <FaLinkedinIn size={18} />
              </div>

            </div>

            <p className="mt-5 text-sm text-green-100">
              Connect with SportNest and stay updated with the latest
              sports facilities, tournaments, and community events.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-green-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Sport<span className="text-green-300">Nest</span>
            </h2>

            <p className="mt-2 text-green-100 max-w-md">
              Connecting players, teams, and venue owners through a
              modern sports facility booking platform.
            </p>
          </div>

          <p className="text-green-100 text-center md:text-right">
            © 2026 SportNest. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
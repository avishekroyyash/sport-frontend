import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className=" mx-auto grid grid-cols-4  px-8 py-12">

        {/* Brand */}
        <div className='mx-auto'>
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <div className="space-y-2">
             <p>Enterprice</p>
             <p>Security</p>
             <p>Privacy Policy</p>
             <p>Cokkie Policy</p>
          </div>
        </div>

        {/* Quick Links */}
        <div  className='mx-auto'>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <p>Home</p>
            <p>Facilities</p>
            <p>Bookings</p>
            <p>Dashboard</p>
          </div>
        </div>

        {/* Contact Information */}
        <div  className='mx-auto'>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="space-y-2">
            <p>Dhaka, Bangladesh</p>
            <p>support@sportnest.com</p>
            <p>+880 1234-567890</p>
          </div>
        </div>

        {/* Social Links */}
        <div  className='mx-auto'>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-2xl">
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaLinkedin />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 text-center py-4">
        <p>© 2026 SportNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

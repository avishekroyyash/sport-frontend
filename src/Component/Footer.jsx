import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='border-2 my-10 grid grid-cols-4 container mx-auto p-7  bg-gray-600 text-white py-16'>
                       <div className='space-y-1'>
                           <p className='text-xl font-semibold'>Features</p>
                           <p>Enterprice</p>
                           <p>Security</p>
                       </div>
                       <div className='space-y-1'>
                        <p className='text-xl font-semibold'>Contact</p>
                        <p>Address</p>
                        <p>About Us</p>
                       </div>
                       <div className='space-y-1'>
                           <p className='text-xl font-semibold'>Term of Use</p>
                           <p>Privacy Policy</p>
                           <p>Cokkie Policy</p>
                       </div>
                       <div className='space-y-1'>
                           <h1 className='text-xl font-semibold'>Social Media</h1>
                           <div className='flex gap-3 items-center'>
                               <FaFacebook />
                               <FaInstagramSquare />
                               <FaTwitterSquare />
                           </div>
                       </div>
                   </div>
        </div>
    );
};

export default Footer;
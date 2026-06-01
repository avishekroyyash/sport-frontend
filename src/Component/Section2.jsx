import Image from 'next/image';
import React from 'react';
import com1 from '../../public/company-1.jpg' ;
import com2 from '../../public/company-2.jpg' ;
import com3 from '../../public/company-7.png' ;
import com4 from '../../public/company-4.png' ;
import com5 from '../../public/company-5.png' ;
import com6 from '../../public/company-6.png' ;
const Section2 = () => {
    return (
       <div className='p-5 my-5'>
        <h1 className='text-4xl font-bold '>Trusted By Our Partners</h1>
        <p className='font-semibold text-gray-700 my-3'>We are proud to collaborate with organizations and brands that share our vision of making sports more accessible and enjoyable for everyone.</p>
        <div className='flex bg-white justify-center items-center '>
           <Image   src={com1} alt='com1' width={200} height={200}></Image>
            <Image  src={com2} alt='com1' width={200} height={200}></Image>
               <Image  src={com3} alt='com1' width={200} height={200}></Image>
            <Image  src={com4} alt='com1' width={200} height={200}></Image>
              <Image  src={com5} alt='com1' width={200} height={200}></Image>
            <Image  src={com6} alt='com1' width={200} height={200}></Image> 
        </div>
       
       </div>
            
    );
};

export default Section2;
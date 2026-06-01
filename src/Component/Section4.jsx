import React from 'react';
import img1 from '../../public/joursey.jpg'
import img2 from '../../public/watch-foodball.jpg'
import img3 from '../../public/red-yello-card.jpg'
import img4 from '../../public/awar-football.jpg'
import Image from 'next/image';

const Section4 = () => {
    return (
        <div className='my-5 p-3 container mx-auto '>
            <h1 className='text-center text-5xl font-bold my-5'>What Makes <span className='text-green-700'>SportNest</span> Special</h1>
            <div className='grid grid-cols-4 ' >
                <div className=' space-y-1 p-3'>
                    <Image className='mx-auto rounded-full max-w-[200px] max-h-[200px]' src={img1} alt='joursey' width={200} height={200}></Image>
                    <h1 className='text-center font-semibold text-2xl'>Our Joursey</h1>
                    <p className='text-gray-700 text-center'>SportNest began with a vision to simplify sports facility booking. Today, we help athletes, teams, and sports enthusiasts discover and reserve quality sports venues quickly and efficiently.
                    </p>
                </div>
                <div className='space-y-2 p-3'>
                    <Image className='mx-auto rounded-full max-w-[220px] max-h-[200px]' src={img2} alt='joursey' width={200} height={200}></Image>
                    <h1 className='text-center font-semibold text-2xl mt-2'>Flexible Timing</h1>
                    <p className='text-gray-700 text-center'>Celebrate excellence with awards and achievements. SportNest helps organizers recognize outstanding players, teams, and performances across various sporting events.
                    </p>

                </div>
                <div className='space-y-1 p-3'>
                    <Image className='mx-auto rouded-full max-w-[200px] max-h-[200px]' src={img3} alt='joursey' width={200} height={200}></Image>
                    <h1 className='text-center font-semibold text-2xl'>Red & Yellow Cards</h1>
                    <p className='text-gray-700 text-center'>Our platform supports organized tournaments where disciplinary actions such as yellow and red cards can be recorded, promoting sportsmanship and adherence to the rules of the game.
                    </p>
                </div>
                <div className=' space-y-1 p-3'>
                    <Image className='mx-auto rounded-full max-w-[140px] max-h-[130px]' src={img4} alt='joursey' width={200} height={200}></Image>
                    <h1 className='text-center font-semibold text-2xl'>Awards & Recognition</h1>
                    <p className='text-gray-700 text-center'>Celebrate excellence with awards and achievements. SportNest helps organizers recognize outstanding players, teams, and performances across various sporting events.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section4;
import React from 'react';
import Search from '../Search/Search.component';

function Hero() {
    return (
        <div>
            <div className='flex flex-col items-center p-10 md:py-25 gap-6 h-[550px] md:h-[820px] w-full bg-[#eef0fc]'>
                <h2 className='text-lg'>Find cars for sale and for rent near you</h2>
                <h2 className='text-center text-[40px] md:text-[60px] font-bold'>Find Your Dream Car</h2>
                <Search />
                <img src="/tesla.png" alt="bmw-car" className='mt-10 md:mt-46' />
            </div>
        </div>
    )
}

export default Hero;
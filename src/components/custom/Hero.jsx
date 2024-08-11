import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaMapMarkerAlt, FaRegCompass } from 'react-icons/fa';

function Hero() {
  return (
    <div className='flex flex-col items-center mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32 gap-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg mt-8 md:mt-12 lg:mt-16'>
      <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight'>
        <span className='text-[#ff8a00]'>Safar.ai - </span>
        <span className='text-gray-800'>aapka apna HumSafar</span>
        <br />
        <span className='text-[#f56551]'>Discover Your Next Adventure</span>
      </h1>
      
      <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>
      
      <div className='flex flex-col sm:flex-row md:flex-row justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-gray-700 mt-6 md:mt-8 lg:mt-10'>
        <div className='flex flex-col items-center'>
          <FaPlaneDeparture className='text-3xl sm:text-4xl md:text-5xl text-[#ff8a00]' />
          <span className='mt-2 text-base sm:text-lg font-semibold'>Book Flights</span>
          <p className='text-sm sm:text-base text-gray-600 mt-1 text-center'>Find the best flights tailored to your travel plans.</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaMapMarkerAlt className='text-3xl sm:text-4xl md:text-5xl text-[#f56551]' />
          <span className='mt-2 text-base sm:text-lg font-semibold'>Explore Destinations</span>
          <p className='text-sm sm:text-base text-gray-600 mt-1 text-center'>Discover new places and hidden gems around the world.</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaRegCompass className='text-3xl sm:text-4xl md:text-5xl text-blue-500' />
          <span className='mt-2 text-base sm:text-lg font-semibold'>Create Itineraries</span>
          <p className='text-sm sm:text-base text-gray-600 mt-1 text-center'>Customize your travel plans and make your trip unforgettable.</p>
        </div>
      </div>
      
      <Link to={'/create-trip'}>
        <Button className='mt-6 bg-gradient-to-r from-[#ff8a00] to-[#f56551] text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-lg hover:from-[#f56551] hover:to-[#ff8a00]'>
          Get Started, It's Free
        </Button>
      </Link>
    </div>
  );
}

export default Hero;

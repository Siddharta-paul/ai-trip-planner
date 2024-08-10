import React from 'react';
import HotelCardItems from './HotelCardItems';

function Hotels({ trip }) {
    if (!trip || !trip.tripData || !trip.tripData.hotelOptions || trip.tripData.hotelOptions.length === 0) {
        return (
            <div className='p-6 text-center'>
                <h2 className='font-bold text-xl'>No hotels found</h2>
            </div>
        );
    }

    return (
        <div className='p-6'>
            <h2 className='font-bold text-2xl mb-6'>Hotel Recommendations</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {trip.tripData.hotelOptions.map((hotel, index) => (
                    <div
                        key={index}
                        className='transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'
                    >
                        <HotelCardItems hotel={hotel} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotels;

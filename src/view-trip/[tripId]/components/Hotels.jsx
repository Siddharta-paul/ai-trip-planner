import React from 'react';

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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {trip.tripData.hotelOptions.map((hotel, index) => (
                    <a
                        key={index}
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.hotelName)},${encodeURIComponent(hotel.hotelAddress)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'
                    >
                        <img 
                            src='/placeholder.png' 
                            alt={`Image of ${hotel.hotelName}`} 
                            className='w-full h-[200px] object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='font-medium text-lg truncate'>{hotel.hotelName}</h3>
                            <p className='text-sm text-gray-500 truncate'>
                                📍 {hotel.hotelAddress}
                            </p>
                            <p className='text-sm text-gray-500'>
                                💰 Price: {hotel.price || 'N/A'}
                            </p>
                            <p className='text-sm text-gray-500'>
                                ⭐ Rating: {hotel.rating || 'N/A'}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Hotels;

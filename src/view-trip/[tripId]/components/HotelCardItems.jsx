import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { useEffect, useState } from 'react';

function HotelCardItems({ hotel, index }) {
    const [photoUrl, setPhotoUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (hotel) {
            GetPlacePhoto();
        }
    }, [hotel]);

    const GetPlacePhoto = async () => {
        try {
            const data = {
                textQuery: hotel?.hotelName,
            };

            const result = await GetPlaceDetails(data);
            const photoName = result?.data?.places?.[0]?.photos?.[0]?.name;

            if (photoName) {
                const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
                setPhotoUrl(photoUrl);
            } else {
                setError('Photo not available');
            }
        } catch (err) {
            console.error('Error fetching place details:', err);
            setError('Failed to fetch place details');
        }
    };

    return (
        <a
            key={index}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.hotelName)},${encodeURIComponent(hotel.hotelAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className='block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'
        >
            {photoUrl ? (
                <img
                    src={photoUrl}
                    alt={`${hotel.hotelName} image`}
                    className='w-full h-[200px] object-cover transition-transform duration-300'
                />
            ) : (
                <div className='w-full h-[200px] bg-gray-200 flex items-center justify-center'>
                    {error ? error : 'Loading...'}
                </div>
            )}
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
    );
}

export default HotelCardItems;

import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

function UserTripCardItem({ trip, onDelete }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: trip?.userSelection?.location?.label,
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
    <div className='relative group hover:scale-105 transition-transform'>
      <Link to={`/view-trip/${trip?.id}`}>
        <img
          src={photoUrl ? photoUrl : '/placeholder.png'}
          alt={trip?.userSelection?.location?.label}
          className='object-cover rounded-xl h-[220px] w-full'
        />
        <div className='mt-3'>
          <h2 className='font-bold text-lg'>
            {trip?.userSelection?.location?.label}
          </h2>
          <p className='text-gray-600'>
            {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget
          </p>
        </div>
      </Link>

      {/* Delete button at the bottom right */}
      <button
        onClick={onDelete}
        className='absolute bottom-3 right-3 text-red-600 p-2 bg-white shadow-lg rounded-full hover:bg-red-100 transition-colors'
      >
        <MdDelete size={24} />
      </button>
    </div>
  );
}

export default UserTripCardItem;

import { Button } from '@/components/ui/button';
import { FaShareAlt } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function InfoSection({ trip }) {
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
                textQuery: trip?.userSelection?.location?.label
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

    // Function to safely get data from the trip object
    const getData = (path, defaultValue = 'Not Available') => {
        return path.split('.').reduce((acc, part) => acc && acc[part], trip) || defaultValue;
    };

    return (
        <div className='p-5 md:p-10'>
            {photoUrl ? (
                <img
                    src={photoUrl}
                    alt='Trip Location'
                    className='h-[340px] w-full object-cover rounded-xl mb-5'
                />
            ) : (
                <div className='h-[340px] w-full flex justify-center items-center bg-gray-200 rounded-xl mb-5'>
                    <p>{error || 'Loading...'}</p>
                </div>
            )}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <div className='flex flex-col gap-3 mb-5 md:mb-0'>
                    <h2 className='font-bold text-xl md:text-2xl'>
                        {getData('userSelection.location.label')}
                    </h2>
                    <div className='flex flex-wrap gap-3'>
                        <span className='text-gray-700 p-2 px-4 bg-gray-200 rounded-lg text-xs md:text-sm'>
                            📅 {getData('userSelection.noOfDays', 'N/A')} Days
                        </span>
                        <span className='text-gray-700 p-2 px-4 bg-gray-200 rounded-lg text-xs md:text-sm'>
                            💰 {getData('userSelection.budget', 'N/A')} Budget
                        </span>
                        <span className='text-gray-700 p-2 px-4 bg-gray-200 rounded-lg text-xs md:text-sm'>
                            🏄‍♂️ No of Travellers: {getData('userSelection.traveller', 'N/A')}
                        </span>
                    </div>
                </div>
                <Button className='flex items-center'>
                    <FaShareAlt className='mr-2' /> Share
                </Button>
            </div>
        </div>
    );
}

export default InfoSection;

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { IoIosTimer } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function PlaceCardItems({ place }) {
    const [photoUrl, setPhotoUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (place) {
            fetchPlacePhoto();
        }
    }, [place]);

    const fetchPlacePhoto = async () => {
        try {
            const data = {
                textQuery: place?.placeName,
            };

            const result = await GetPlaceDetails(data);
            const photoName = result?.data?.places?.[0]?.photos?.[0]?.name;

            if (photoName) {
                const url = PHOTO_REF_URL.replace('{NAME}', photoName);
                setPhotoUrl(url);
            } else {
                setError('Photo not available');
            }
        } catch (err) {
            console.error('Error fetching place details:', err);
            setError('Failed to fetch place details');
        }
    };

    return (
        <Link
            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.placeName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className=" rounded-xl p-4 mt-2 flex gap-4 hover:scale-105 transition-transform hover:shadow-xl cursor-pointer flex-col md:flex-row">
                <img
                    src={photoUrl || '/placeholder.png'}
                    className="w-full md:w-[180px] h-[250px] rounded-md object-cover"
                    alt={place.placeName || 'Place Image'}
                />

                <div className="flex-1 mt-2 md:mt-0">
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 line-clamp-2">
                        {place.placeName || 'Unnamed Place'}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-2 line-clamp-4">
                        {place.placeDetails || 'No details available.'}
                    </p>
                    <div className="flex items-center gap-3 mb-2">
                        <IoIosTimer className="w-5 h-5" />
                        <span className="text-sm md:text-base lg:text-lg">
                            {place?.timeTravel || 'N/A'}
                        </span>
                        <Button className="ml-auto" size="sm">
                            <FaMapLocationDot className="w-5 h-5" />
                        </Button>
                    </div>
                    <p className="text-sm font-bold text-orange-500">
                        🎟 Ticket: {place.ticketPricing || 'Free entry'}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default PlaceCardItems;

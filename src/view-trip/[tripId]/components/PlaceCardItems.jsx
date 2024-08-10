import { Button } from '@/components/ui/button';
import React from 'react';
import { IoIosTimer } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItems({ place }) {
    return (
        <Link 
            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.placeName)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
        >
            <div className="border rounded-xl p-4 mt-2 flex gap-4 hover:scale-105 transition-transform hover:shadow-lg cursor-pointer flex-col md:flex-row">
                <img 
                    src='/placeholder.png' 
                    className="w-full md:w-[150px] h-[150px] rounded-xl object-cover" 
                    alt={place.placeName || 'Place Image'}
                />
                
                <div className="flex-1 mt-2 md:mt-0">
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-1">
                        {place.placeName || 'Unnamed Place'}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-2">
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
                        Ticket: {place.ticketPricing || 'Free entry'}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default PlaceCardItems;

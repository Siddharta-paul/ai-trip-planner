import { Button } from '@/components/ui/button';
import React from 'react';
import { IoIosTimer } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItems({ place }) {
    return (
        <Link to={`https://www.google.com/maps/search/?api=1&query=${place.PlaceName}`} target="_blank">
            <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer flex-col md:flex-row">
                <img 
                    src='/placeholder.png' 
                    className="w-full md:w-[130px] h-[130px] rounded-xl mt-2 object-cover" 
                    alt={place.PlaceName || 'Place Image'}
                />
                
                <div className="flex-1">
                    <h2 className="font-bold text-base md:text-lg lg:text-xl">
                        {place.PlaceName || 'Unnamed Place'}
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base text-gray-400">
                        {place.PlaceDetails || 'No details available.'}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                        <IoIosTimer className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                        <span className="text-xs md:text-sm lg:text-base">
                            {place?.TimeTravel || 'N/A'}
                        </span>
                        <Button className="ml-auto" size="sm">
                            <FaMapLocationDot className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                        </Button>
                    </div>
                    <p className="text-xs font-bold text-orange-500 mt-2">
                        Ticket: {place.TicketPricing || 'Free entry'}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default PlaceCardItems;

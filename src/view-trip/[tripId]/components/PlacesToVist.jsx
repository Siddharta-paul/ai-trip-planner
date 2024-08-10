import React from 'react';
import PlaceCardItems from './PlaceCardItems';

function PlacesToVisit({ trip }) {
    if (!trip || !trip.tripData || !trip.tripData.itinerary) {
        return <div className="p-6 text-center">No itinerary data available.</div>;
    }

    return (
        <div className="p-6">
            <h2 className="font-bold text-2xl mb-6">Places to Visit</h2>

            <div>
                {trip.tripData.itinerary.map((item, dayIndex) => (
                    <div key={dayIndex} className='mb-6'>
                        <h2 className="text-xl font-bold mb-3">Day {item.Day || (dayIndex + 1)}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {item.dayPlan?.length ? (
                                item.dayPlan.map((place, placeIndex) => (
                                    <div key={placeIndex} className="bg-white rounded-lg shadow-md p-4">
                                        <h2 className="font-medium text-sm text-orange-600 mb-2">
                                            <span className='font-semibold text-black'>Best Time to Visit: </span>
                                            {place.bestTimeToVisit || 'Anytime'}
                                        </h2>
                                        <PlaceCardItems place={place} />
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-gray-500">No places found for this day.</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlacesToVisit;

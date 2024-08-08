import React from 'react';
import PlaceCardItems from './PlaceCardItems';

function PlacesToVisit({ trip }) {
    return (
        <div>
            <h2 className="font-bold text-lg">Places to Visit</h2>

            <div>
                {trip?.tripData?.Itinerary?.map((item, dayIndex) => (
                    <div key={dayIndex} className='mt-5'>
                        <div>
                        <h2 className="text-lg font-bold text-left">Day {item.Day || (dayIndex + 1)}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                        {item.DayPlan?.map((place, placeIndex) => (
                            <div key={placeIndex} className="mb-2 text-left">
                                <h2 className="font-medium text-sm text-orange-600"><span className='text-black'>Best Time to visit : </span> {place.BestTimetoVisit || 'Anytime'}</h2>
                                <div className='my-3'>

                                    <PlaceCardItems place={place} />
                                </div>
                                
                            </div>
                        ))}
                        </div>   
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlacesToVisit;

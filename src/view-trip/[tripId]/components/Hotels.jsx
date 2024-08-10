function Hotels({ trip }) {
    if (!trip || !trip.tripData || !trip.tripData.hotelOptions) {
        return <div>No hotels found</div>;
    }

    return (
        <div>
            <h2 className="font-bold text-xl p-6">Hotel Recommendations</h2>

            <div className="grid grid-cols-2 md:grid-col-3 xl:grid-cols-4 gap-5">
                {trip.tripData.hotelOptions.map((hotel, index) => (
                    <a
                        key={index}
                        href={`https://www.google.com/maps/search/?api=1&query=${hotel.hotelame},${hotel.hotelAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="hover:scale-105 transition-all cursor-pointer">
                            <img src='/placeholder.png' className="rounded-xl" />
                            <div className="my-2 flex flex-col gap-2">
                                <h2 className="font-medium">{hotel.hotelName}</h2>
                                {hotel && (
                                    <h2 className="text-xs text-gray-500">
                                        📍{hotel.hotelAddress}
                                    </h2>
                                )}
                                <h2 className="text-xs text-gray-500">
                                    💰Price: {hotel?.price}
                                </h2>
                                <h2 className="text-xs text-gray-500">
                                    ⭐{hotel?.rating}
                                </h2>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Hotels;
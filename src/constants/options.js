export const SelectTravelList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'Explore the world solo with freedom and flexibility 🌍✨',
        icon: '🏄‍♂️',
        people: '1'
    },
    {
        id: 2,
        title: 'Family',
        desc: 'Enjoy a memorable family vacation with loved ones 👨‍👩‍👧‍👦🏖️',
        icon: '👪',
        people: '2-4'
    },
    {
        id: 3,
        title: 'Friends',
        desc: 'Create fun memories with a group of friends 🕺💃',
        icon: '🎉👯‍♂️',
        people: '5-8'
    },
    {
        id: 4,
        title: 'Couple',
        desc: 'Romantic getaways with your special someone ❤️🌹',
        icon: '👫',
        people: '2'
    }
]


export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Budget Friendly',
        desc: 'Great deals for the budget-savvy traveler 💵🎒',
        icon: '💵',
        budget: '$500-$1000'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Comfortable options for a balanced budget 🏨🛍️',
        icon: '💰',
        budget: '$1000-$2000'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Pamper yourself with top-notch experiences 💎🌟',
        icon: '💸',
        budget: '$2000+'
    }
]


export const AI_PROMPT = `
Generate a travel plan with the following details:

- **Location**: {location}
- **Duration**: {totalDays} days
- **Number of Travellers**: {traveller}
- **Budget**: {budget}

Please provide the result in the following JSON format:

"hotelOptions": [
      {
        "hotelName": "<Hotel Name>",
        "hotelAddress": "<Hotel Address>",
        "price": "<Price>",
        "hotelImageURL": "<Hotel Image URL>",
        "description": "<Hotel Description>",
        "geoCoordinates": {
          "latitude": <Latitude>,
          "longitude": <Longitude>
        },
        "rating": <Rating>
      }
    ],
"itinerary": [
      {
        "day": <Day Number>,
        "dayPlan": [
          {
            "placeName": "<Place Name>",
            "placeDetails": "<Place Details>",
            "placeImageURL": "<Place Image URL>",
            "geoCoordinates": {
                "latitude": <Latitude>,
                "longitude": <Longitude>
            },
            "ticketPricing": "<Ticket Pricing>",
            "timeTravel": "<Time Travel>",
            "bestTimeToVisit": "<Best Time To Visit>"
          }
        ]
      }
    ]
`;


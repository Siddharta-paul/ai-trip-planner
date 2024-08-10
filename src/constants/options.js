export const SelectTravelList=[
    {
        id: 1,
        title:'Just Me',
        desc:'A solo traveller in exploration',
        icon:'🏄‍♂️',
        people:'1'
    },
    {
        id: 2,
        title:'Family',
        desc:'A family vacation with friends',
        icon:'👪',
        people:'2-4'
    },
    {
        id: 3,
        title:'Friends',
        desc:'A group vacation with friends',
        icon:'👬👭',
        people:'5-8'
    },
    {
        id: 4,
        title:'Couple',
        desc:'A group vacation with your love',
        icon:'👫',
        people:'2'
    }

]

export const SelectBudgetOptions=[
    {
        id: 1,
        title:'Budget Friendly',
        desc:'Affordable options for a budget-conscious traveler',
        icon:'💵',
        budget:'$500-$1000'
    },
    {
        id: 2,
        title:'Moderate',
        desc:'Average prices for a moderately budget-conscious traveler',
        icon:'💰',
        budget:'$1000-$2000'
    },
    {
        id: 3,
        title:'Luxury',
        desc:'Higher prices for an expensive traveler',
        icon:'💸',
        budget:'$2000+'
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


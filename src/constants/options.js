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

export const AI_PROMPT="Generate Travel Plan for Location : {location} for {totalDays} Days for {traveller} person with a {budget} budget, give me Hotel options list with HotelName, HotelAddress, Price, hotel image url, geocoordinates, rating, description, and suggest itenary with placeName, Place details, place Image Url, Geo Coordinates, ticket Pricing, Time Travel each of the location for {totalDays} days eith each day plan with best time to visit in JSON format."
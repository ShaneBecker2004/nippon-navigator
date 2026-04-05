// Popular Images
import Disney from "../assets/images/popular/tokyo-disney.jpg"
import Universal from "../assets/images/popular/universal-japan-globe-day.jpg"
import Skytree from "../assets/images/popular/tokyo-skytree-afternoon.avif"
import Strawberry from "../assets/images/popular/yokohama_strawberry_festival.webp"
import Ichiran from "../assets/images/popular/ichiran_ramen.jpg"

// Destination Images
import city1 from "../assets/images/explore/tokyo-night.jpg"
import city2 from "../assets/images/explore/osaka-castle-evening.jpg"
import city3 from "../assets/images/explore/kyoto-evening.jpg"
import city4 from "../assets/images/explore/yokohama-evening.jpg"
import city5 from "../assets/images/explore/sapporo-night.webp"
import city6 from "../assets/images/explore/hiroshima-city-night.jpg"
import city7 from "../assets/images/explore/nara-deer-park-afternoon.jpg"
import city8 from "../assets/images/explore/fukuoka-city-night.jpg"

// Details Images (until database is working)
import image1 from "../assets/images/disney/eneos-disney-ad.jpg"
import image2 from "../assets/images/disney/frozen-land-day.png"
import image3 from "../assets/images/disney/mickey-minnie-day.jpg"
import image4 from "../assets/images/disney/mysterious-island-night.jpg"
import image5 from "../assets/images/disney/neverland-day.webp"
import image6 from "../assets/images/disney/tokyo-disney-map.webp"
import image7 from "../assets/images/disney/tokyo-disney.jpg"


export const destinationsData = [
    {
      id: 0,
      name: "Tokyo",
      tours: "10 things to do",
      image: city1,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Tokyo Prefecture",
    },
    {
      id: 1,
      name: "Osaka",
      tours: "10 things to do",
      image: city2,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Osaka Prefecture",
    },
    {
      id: 2,
      name: "Kyoto",
      tours: "10 things to do",
      image: city3,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Kyoto Prefecture",
    },
    {
      id: 3,
      name: "Yokohama",
      tours: "10 things to do",
      image: city4,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Kanagawa Prefecture",
    },
    {
      id: 4,
      name: "Sapporo",
      tours: "10 things to do",
      image: city5,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Hokkaido Prefecture",
    },
    {
      id: 5,
      name: "Hiroshima",
      tours: "10 things to do",
      image: city6,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Hiroshima Prefecture",
    },
    {
      id: 6,
      name: "Nara",
      tours: "10 things to do",
      image: city7,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Nara Prefecture",
    },
    {
      id: 7,
      name: "Fukuoka",
      tours: "10 things to do",
      image: city8,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Fukuoka Prefecture",
    },
]

export const popularsData = [
        {
            id: 0,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Theme Park"],
        },
        {
            id: 1,
            title: "Universal Studios Japan",
            image: Universal,
            location: "Osaka",
            category: [("Theme Park")],
        },
        {
            id: 2,
            title: "Tokyo Skytree",
            image: Skytree,
            location: "Tokyo",
            category: ["Shopping", "Observation Deck"],
        },
        {
            id: 3,
            title: "Ichiran Ramen",
            image: Ichiran,
            location: "Tokyo",
            category: ["Restaurant"],
        },
        {
            id: 4,
            title: "Ichiran Ramen",
            image: Ichiran,
            location: "Tokyo",
            category: ["Restaurant"],
        }
]

export const activitiesData = [
        {
            id: 0,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Theme Park"],
            days: "1-2 days",
            price: 65,
            afterDiscount: 0,
            rating: 4.5,
            review: 100,
        },
        {
            id: 1,
            title: "Universal Studios Japan",
            image: Universal,
            location: "Osaka",
            category: [("Theme Park")],
            days: "1-2 days",
            price: 85,
            afterDiscount: 60,
            rating: 4.5,
            review: 95,
        },
        {
            id: 2,
            title: "Tokyo Skytree",
            image: Skytree,
            location: "Tokyo",
            category: ["Shopping", "Observation Deck"],
            days: "unlimited",
            price: 45,
            afterDiscount: 32,
            rating: 4.2,
            review: 50,
        },
        {
            id: 3,
            title: "Ichiran Ramen",
            image: Ichiran,
            location: "Tokyo",
            category: ["Restaurant"],
            days: "24/7",
            price: 12,
            afterDiscount: 0,
            rating: 4.2,
            review: 99,
        },
        {
            id: 4,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Amusement"],
            days: "5 days - 4 nights",
            price: 75,
            afterDiscount: 58,
            rating: 4.5,
            review: 5,
        },
        {
            id: 5,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Amusement"],
            days: "5 days - 4 nights",
            price: 75,
            afterDiscount: 58,
            rating: 4.5,
            review: 5,
        },
        {
            id: 6,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Amusement"],
            days: "5 days - 4 nights",
            price: 75,
            afterDiscount: 58,
            rating: 4.5,
            review: 5,
        },
        {
            id: 7,
            title: "Yokohama Strawberry Festival",
            image: Strawberry,
            location: "Yokohama",
            category: ["Festival"],
            days: "All Day",
            price: 5,
            afterDiscount: 0,
            rating: 4.1,
            review: 25,
        },
]

export const exploreDetails = {
    title: "Tokyo Disney Resort",
    des: "This is a test text description",
    tourInfo: [
        '<strong className="font-bold"> Test </strong>: Urayasu, Tokyo',
        '<strong className="font-bold"> Test2 </strong>: Filler Test',
        '<strong className="font-bold"> Test3 </strong>: Narita International Airport',
        '<strong className="font-bold"> Test4 </strong>: Haneda International Airport',
    ],
    highlights: [
    " Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more",
    " Dependent on so extremely delivered by. Yet no jokes  worse her why. Bed one supposing breakfast day fulfilled off depending questions.",
    " Whatever boy her exertion his extended. Ecstatic  followed handsome drawings entirely Mrs one yet  outweigh.",
    "Meant balls it if up doubt small purse. Required his  you put the outlived answered position. A pleasure exertion if believed provided to.",
  ],

  itinerary: [
    {
      title: `<span class="me-1 fw-bold">Day 1:</span>  Airport Pick Up `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },

    {
      title: `<span class="me-1 fw-bold">Day 2:</span>  Temples & River Cruise `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in. `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 3:</span>  Massage & Overnight Train`,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 4:</span>  Khao Sok National Park `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 5:</span>  Travel to Koh Phangan `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 6:</span> Morning Chill & Muay Thai Lesson `,
      des: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
  ],

  included: [
    "Comfortable stay for 4 nights in your preferred category Hotels",
    "Professional English speaking guide to help you explore the cities",
    "Breakfast is included as mentioned in Itinerary.",
    "Per Peron rate on twin sharing basis",
    "Entrance Tickets to Genting Indoor Theme Park    ",
    "All Tours & Transfers on Seat In Coach Basis ",
    "Visit Bali Safari & Marine Park with Jungle Hopper Pass    ",
  ],
  exclusion: [
    "Lunch and dinner are not included in CP plans",
    "Any other services not specifically mentioned in the inclusions",
    "Medical and Travel insurance",
    "Airfare is not included ",
    "Early Check-In & Late Check-Out ",
    "Anything which is not specified in Inclusions    ",
  ],

  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },

    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    }
  ],
};

export const location = [
    "Tokyo",
    "Osaka",
    "Nagoya",
    "Hokkaido",
    "Yokohama",
    "Nara",
    "Fukuoka"
];

export const Categories = [
    "Touristy",
    "Cultural",
    "Historical",
    "Food",
    "Shopping",
    "Entertainment"
]

export const Duration = [
    "1-2 hours",
    "3-4 hours",
    "5-6 hours",
    "7-8 hours",
    "9-10 hours",
    "11-12 hours"
]

export const PriceRange = [
    "$0 - $25",
    "$25 - $50",
    "$50 - $75",
    "$75 - $100",
    "$100 - $125",
    "$125 - $150",
]

export const Ratings = [
    "⭐", 
    "⭐⭐", 
    "⭐⭐⭐", 
    "⭐⭐⭐⭐", 
    "⭐⭐⭐⭐⭐"
]
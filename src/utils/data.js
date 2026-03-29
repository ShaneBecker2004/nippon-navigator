// Popular Images
import Disney from "../assets/images/popular/tokyo-disney.jpg"
import Universal from "../assets/images/popular/universal-japan-globe-day.jpg"
import Skytree from "../assets/images/popular/tokyo-skytree-afternoon.avif"
import Strawberry from "../assets/images/popular/yokohama_strawberry_festival.webp"
import Ichiran from "../assets/images/popular/ichiran_ramen.jpg"

// Destination Images
import explore1 from "../assets/images/explore/tokyo-night.jpg"
import explore2 from "../assets/images/explore/osaka-castle-evening.jpg"
import explore3 from "../assets/images/explore/kyoto-evening.jpg"
import explore4 from "../assets/images/explore/yokohama-evening.jpg"
import explore5 from "../assets/images/explore/sapporo-night.webp"
import explore6 from "../assets/images/explore/hiroshima-city-night.jpg"
import explore7 from "../assets/images/explore/nara-deer-park-afternoon.jpg"
import explore8 from "../assets/images/explore/fukuoka-city-night.jpg"

// *Tour Images


export const destinationsData = [
    {
      id: 0,
      name: "Tokyo",
      tours: "10 things to do",
      image: explore1,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Tokyo Prefecture",
    },
    {
      id: 1,
      name: "Osaka",
      tours: "10 things to do",
      image: explore2,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Osaka Prefecture",
    },
    {
      id: 2,
      name: "Kyoto",
      tours: "10 things to do",
      image: explore3,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Kyoto Prefecture",
    },
    {
      id: 3,
      name: "Yokohama",
      tours: "10 things to do",
      image: explore4,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Kanagawa Prefecture",
    },
    {
      id: 4,
      name: "Sapporo",
      tours: "10 things to do",
      image: explore5,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Hokkaido Prefecture",
    },
    {
      id: 5,
      name: "Hiroshima",
      tours: "10 things to do",
      image: explore6,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Hiroshima Prefecture",
    },
    {
      id: 6,
      name: "Nara",
      tours: "10 things to do",
      image: explore7,
      link: 'explore-name',
      shortDes: '',
      link: "/explore",
      location: "Nara Prefecture",
    },
    {
      id: 7,
      name: "Fukuoka",
      tours: "10 things to do",
      image: explore8,
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
    ]
}

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

]

export const PriceRange = [

]

export const Ratings = [
    "⭐", 
    "⭐⭐", 
    "⭐⭐⭐", 
    "⭐⭐⭐⭐", 
    "⭐⭐⭐⭐⭐"
]
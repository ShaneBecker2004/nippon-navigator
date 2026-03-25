// Popular Images
import Disney from "../../assets/images/popular/tokyo-disney.jpg"
import Universal from "../../assets/images/popular/universal-japan-globe-day.jpg"
import Skytree from "../../assets/images/popular/tokyo-skytree-afternoon.avif"
import Strawberry from "../../assets/images/popular/yokohama_strawberry_festival.webp"
import Ichiran from "../../assets/images/popular/ichiran_ramen.jpg"

// Destination Images
import tour from "../assets/images/tour/tokyo-night.jpg"
import tour1 from "../assets/images/tour/osaka-castle-evening.jpg"
import tour2 from "../assets/images/tour/kyoto-evening.jpg"
import tour3 from "../assets/images/tour/yokohama-evening.jpg"
import tour4 from "../assets/images/tour/sapporo-night.webp"
import tour5 from "../assets/images/tour/hiroshima-city-night.jpg"

// *Tour Images


export const destinationsData = [
    {
      id: 0,
      name: "Tokyo",
      tours: "10 tours and activities",
      image: tour,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Tokyo Prefecture",
    },
    {
      id: 1,
      name: "Osaka",
      tours: "10 tours and activities",
      image: tour1,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Osaka Prefecture",
    },
    {
      id: 2,
      name: "Kyoto",
      tours: "10 tours and activities",
      image: tour2,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Kyoto Prefecture",
    },
    {
      id: 3,
      name: "Yokohama",
      tours: "10 tours and activities",
      image: tour3,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Kanagawa Prefecture",
    },
    {
      id: 4,
      name: "Sapporo",
      tours: "10 tours and activities",
      image: tour4,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Hokkaido Prefecture",
    },
    {
      id: 5,
      name: "Hiroshima",
      tours: "10 tours and activities",
      image: tour5,
      link: 'tour-name',
      shortDes: '',
      link: "/tour",
      location: "Hiroshima Prefecture",
    },
  ]

export const popularsData = [
        {
            id: 0,
            title: "Tokyo Disney Resort",
            image: Disney,
            location: "Tokyo",
            category: ["Theme Park"],
            days: "5 days - 4 nights",
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
            days: "3 days - 2 nights",
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

export const tourDetails = {
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
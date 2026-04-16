// // Popular Images
// import Disney from "../assets/images/popular/tokyo-disney.jpg"
// import Universal from "../assets/images/popular/universal-japan-globe-day.jpg"
// import Skytree from "../assets/images/popular/tokyo-skytree-afternoon.avif"
// import Strawberry from "../assets/images/popular/yokohama_strawberry_festival.webp"
// import Ichiran from "../assets/images/popular/ichiran_ramen.jpg"

// // Destination Images
// import city1 from "../assets/images/explore/tokyo-night.jpg"
// import city2 from "../assets/images/explore/osaka-castle-evening.jpg"
// import city3 from "../assets/images/explore/kyoto-evening.jpg"
// import city4 from "../assets/images/explore/yokohama-evening.jpg"
// import city5 from "../assets/images/explore/sapporo-night.webp"
// import city6 from "../assets/images/explore/hiroshima-city-night.jpg"
// import city7 from "../assets/images/explore/nara-deer-park-afternoon.jpg"
// import city8 from "../assets/images/explore/fukuoka-city-night.jpg"

// // Details Images (until database is working)
// import image1 from "../assets/images/disney/eneos-disney-ad.jpg"
// import image2 from "../assets/images/disney/frozen-land-day.png"
// import image3 from "../assets/images/disney/mickey-minnie-day.jpg"
// import image4 from "../assets/images/disney/mysterious-island-night.jpg"
// import image5 from "../assets/images/disney/neverland-day.webp"
// import image6 from "../assets/images/disney/tokyo-disney-map.webp"
// import image7 from "../assets/images/disney/tokyo-disney.jpg"


// src/utils/data.js

export const destinationsData = [
  {
    name: "Tokyo",
    activities: "10 things to do",
    image: "/images/explore/tokyo-night.jpg",
    location: "Tokyo Prefecture",
  },
  {
    name: "Osaka",
    activities: "10 things to do",
    image: "/images/explore/osaka-castle-evening.jpg",
    location: "Osaka Prefecture",
  },
  {
    name: "Kyoto",
    activities: "10 things to do",
    image: "/images/explore/kyoto-evening.jpg",
    location: "Kyoto Prefecture",
  },
  {
    name: "Yokohama",
    activities: "10 things to do",
    image: "/images/explore/yokohama-evening.jpg",
    location: "Kanagawa Prefecture",
  },
  {
    name: "Sapporo",
    activities: "10 things to do",
    image: "/images/explore/sapporo-night.webp",
    location: "Hokkaido Prefecture",
  },
  {
    name: "Hiroshima",
    activities: "10 things to do",
    image: "/images/explore/hiroshima-city-night.jpg",
    location: "Hiroshima Prefecture",
  },
  {
    name: "Nara",
    activities: "10 things to do",
    image: "/images/explore/nara-deer-park-afternoon.jpg",
    location: "Nara Prefecture",
  },
  {
    name: "Fukuoka",
    activities: "10 things to do",
    image: "/images/explore/fukuoka-city-night.jpg",
    location: "Fukuoka Prefecture",
  },
];

export const popularsData = [
  {
    title: "Tokyo Disney Resort",
    image: "/images/popular/tokyo-disney.jpg",
    location: "Tokyo",
    category: ["Theme Park"],
  },
  {
    title: "Universal Studios Japan",
    image: "/images/popular/universal-japan-globe-day.jpg",
    location: "Osaka",
    category: ["Theme Park"],
  },
  {
    title: "Tokyo Skytree",
    image: "/images/popular/tokyo-skytree-afternoon.avif",
    location: "Tokyo",
    category: ["Shopping", "Observation Deck"],
  },
  {
    title: "Ichiran Ramen",
    image: "/images/popular/ichiran_ramen.jpg",
    location: "Tokyo",
    category: ["Restaurant"],
  },
];

export const activitiesData = [
  {
    title: "Tokyo Disney Resort",
    location: "Tokyo",
    category: ["Theme Park"],
    duration: "1-2 hours",
    price: 65,
    rating: 4.5,
    review: 100,
    galleryImages: [
      "/images/disney/eneos-disney-ad.jpg",
      "/images/disney/frozen-land-day.png",
      "/images/disney/mickey-minnie-day.jpg",
      "/images/disney/mysterious-island-night.jpg",
      "/images/disney/neverland-day.webp",
      "/images/disney/tokyo-disney-map.webp",
      "/images/disney/tokyo-disney.jpg",
    ],
  },
  {
    title: "Universal Studios Japan",
    location: "Osaka",
    category: ["Theme Park"],
    duration: "1-2 hours",
    price: 85,
    rating: 4.5,
    review: 95,
    galleryImages: [
      "/images/popular/universal-japan-globe-day.jpg",
    ],
  },
  {
    title: "Tokyo Skytree",
    location: "Tokyo",
    category: ["Shopping", "Observation Deck"],
    duration: "unlimited",
    price: 45,
    rating: 4.2,
    review: 50,
    galleryImages: [
      "/images/popular/tokyo-skytree-afternoon.avif",
    ],
  },
  {
    title: "Ichiran Ramen",
    location: "Tokyo",
    category: ["Food & Drink"],
    duration: "24/7",
    price: 12,
    rating: 4.2,
    review: 99,
    galleryImages: [
      "/images/popular/ichiran_ramen.jpg",
    ],
  },
  {
    title: "Yokohama Strawberry Festival",
    location: "Yokohama",
    category: ["Festival"],
    duration: "All Day",
    price: 5,
    rating: 4.1,
    review: 25,
    galleryImages: [
      "/images/popular/yokohama_strawberry_festival.webp",
    ],
  },
];

export const exploreDetails = {
  title: "Tokyo Disney Resort",
  description: "Explore a resort full of magic, wonder, and discoveries ranging from seeing storybooks and movies come to life at FantasyLand at Tokyo Disneyland, to exploring the many wonders of the seas and ports that await you at Tokyo DisneySea. Take the Disney Monorail to Ikspiari, the official Disney hotels, and get access to Maihama Station to get access to Tokyo and everywhere else. Go and explore the magic that awaits you!",
  type: "theme_park",
  location: "Tokyo",
  open_hours: "9AM - 9PM",
  phone: "+81 50-3090-2613",
  website: "https://www.tokyodisneyresort.jp/en/index.html",
  price: null,
  rating: 4.8,
  category: ["theme_park","family_friendly","amusement"],
  highlights: [
    "Experience the magic and fun of the Disney Parks, Tokyo Disneyland and Tokyo DisneySea",
    "Enjoy and explore the magic of fantasy and stories in the world of Tokyo Disneyland",
    "Discover the eight ports that make the journey across the seas special at Tokyo DisneySea",
    "Take the Disney Monorail across the two parks, plus stop at the Resort Gateway Station for the Ikspiari shopping mall with access to Maihama Station and the Disney Ambassador Hotel",
    "Stay at one of the five Disney Hotels for a special magical experience and extra perks: Tokyo Disneyland Hotel, Tokyo DisneySea Hotel MiraCosta, Tokyo DisneySea Fantasy Springs Hotel, The Toy Story Hotel, or the Tokyo Disney Celebration Hotel",
    "From Bayside Station (Disney Monorail), take a complimentary bus or walk to the Disney Official Hotels: Hilton Tokyo Bay, Sheraton Grande Tokyo Bay Hotel, Grand Nikko Tokyo Bay Maihama, Maihama View Hotel, Hotel Okura Tokyo Bay, and the Tokyo Bay Maihama Hotel First Resort"
  ],
  images: [
    "/images/disney/eneos-disney-ad.jpg",
    "/images/disney/frozen-land-day.png",
    "/images/disney/mickey-minnie-day.jpg",
    "/images/disney/mysterious-island-night.jpg",
    "/images/disney/neverland-day.webp",
    "/images/disney/tokyo-disney-map.webp",
    "/images/disney/tokyo-disney.jpg",
  ],
  thumbnail: "/images/disney/tokyo-disney.jpg",
  details: {
    hotels: [
      "Tokyo Disneyland Hotel",
      "Tokyo DisneySea Hotel MiraCosta",
      "Tokyo DisneySea Fantasy Springs Hotel",
      "Toy Story Hotel",
      "Disney Ambassador Hotel",
      "Tokyo Disney Celebration Hotel",
      "Hilton Tokyo Bay",
      "Sheraton Grande Tokyo Bay Hotel", 
      "Grand Nikko Tokyo Bay Maihama", 
      "Maihama View Hotel", 
      "Hotel Okura Tokyo Bay", 
      "Tokyo Bay Maihama Hotel First Resort"
    ],
    stations: [
      "Maihama Station",
      "Bayside Station",
      "Resort Gateway Station"
    ]
  },
  duration: "Full day",

  title: "Universal Studios Japan",
  slug: "universal-studios-japan",
  description: "Take a trip to Hollywood and visit the many worlds, from the land of Dinosaurs at Jurassic Park, to the whimsical world of Super Mario at Super Nintendo World. Explore and enjoy shopping and fine dining at Universal CityWalk and stay at The Park Front Hotel for quick access to CityWalk, the Theme Park, and Universal City Station with access to the cities of Osaka.",
  type: "theme_park",
  location: "Osaka",
  open_hours: "9AM - 9PM",
  phone: "+81 570-200-606",
  website: "https://www.usj.co.jp/web/en/us",
  price: null,
  rating: 4.7,
  category: ["theme_park","family_friendly","adventure"],
  highlights: [
    "Step into the world of one of the seven Universal theme parks and see what distinguishes this park from the rest.",
    "Go see dinosaurs in Jurassic Park, explore the magical world of Harry Potter, experience the chaos from the Minions at Minion Park, catch a show at Waterworld, or hop into a quick game of Mario Kart at Super Nintendo World.",
    "Craving delicious food or want to go shopping? Explore Universal CityWalk for experiences from the Hard Rock Cafe to shopping at Gap and vintage shops.",
    "Get access to Osaka Station and other areas via Universal City Station at the end of CityWalk.",
    "Stay at the Park Front Hotel at Universal Studios Japan for convenient access to the Park, CityWalk, or the station. You can also stay at any of the approved Universal Studios official hotels."
  ],
  images: [
    "/images/universal/universal-japan-globe-day.jpg",
    "/images/universal/super-nintendo-world.jpg",
    "/images/universal/universal-gateway-entrance.webp",
    "/images/universal/hogwarts-castle-day.jpg",
    "/images/universal/jurassic-park-ride-banner.png",
    "/images/universal/universal-globe-day-2.jpg",
    "/images/universal/universal-studios-5th-anniversary-banner.webp"
  ],
  thumbnail: "/images/universal/universal-japan-globe-day.jpg",
  details: {
    hotels: [
      "The Park Front Hotel at Universal Studios Japan",
      "Approved Universal Studios official hotels"
    ],
    stations: [
      "Universal City Station",
      "Nearby Osaka stations"
    ]
  },
  duration: "Full day"
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
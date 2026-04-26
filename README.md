# Nippon Navigator
- Nippon Navigator is a full-stack web application designed to help travelers explore Japan and plan detailed travel itineraries.

- Built as a Senior Capstone Project, the platform provides an intuitive and user-friendly experience for discovering destinations, activities, and essential travel information — all in one place.

- Users can explore cities, find curated experiences, and organize personalized trips from arrival to departure.


## Features
- Explore major cities across Japan
- Search activities by category (food, nature, shopping, etc.)
- Discover popular attractions and hidden gems
- View detailed activity information (location, duration, pricing, etc.)
- Real-time currency conversion (JPY ↔ USD)
- Access travel resources (visa info, apps, phrases, tips)
- Plan and manage complete travel itineraries
- Save activities to trips

## Technologies Used

**Frontend**
- React.js
- React Bootstrap
- React Router

**Backend**
- Node.js
- Express.js
- Prisma ORM

**Database & Services**
- Neon (PostgreSQL)
- Firebase Authentication
- Cloudinary (image hosting)

**Deployment**
- Vercel (frontend)
- Render (backend)

## Installation and Setup

### Prerequisites
- Node.js (v18+)
- npm
- PostgreSQL database (Neon or local)

---

### Clone the repository
```bash
git clone https://github.com/your-username/nippon-navigator.git
cd nippon-navigator
```

## How to run the project locally
- Download the folder onto your machine
- Open the terminal and connect to the project folder (cd nippon-navigator)
- Run "npm install" to download dependencies
- Open another terminal and connect to the server folder (cd server)
- Run "npm install" as well
- Create a .env file in both the root and /server folders and add the following: 

**Frontend**
- REACT_APP_API_URL=http://localhost:5000

**Backend**
- DATABASE_URL=your_database_url
- CLOUDINARY_CLOUD_NAME=your_cloud_name
- CLOUDINARY_API_KEY=your_api_key
- CLOUDINARY_API_SECRET=your_api_secret
- FIREBASE_PROJECT_ID=your_project_id

- Start the backend server with "npm run dev"
- In another terminal, start the frontend with "npm start"
- Open you browser and visit http://localhost:3000

## Future Improvements
- Add an AI-powered itinerary generator to automatically create travel plans.
- Allow users to upload images when creating trips.
- Develop a user profile page with personalization options (saved activities, preferences, visa tracking, etc.).
- Build an admin dashboard for managing activities, destinations, and content.

## Deployed Application: 
https://nippon-navigator.vercel.app
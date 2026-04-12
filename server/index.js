import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"; // ✅ Import the PostgreSQL adapter
import { authenticateUser } from "./middleware/authMiddleware.js";

// 1. Load environment variables
dotenv.config();

// ✅ Debug: check if DATABASE_URL is loaded
console.log("DB URL:", process.env.DATABASE_URL);

// 2. Initialize Prisma with the adapter
const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Nippon Navigator API is running 🚀");
});

//////////////////////////////////
// 1. MASTER CATALOG ROUTES
//////////////////////////////////

// Get all destinations for the homepage
// Get all destinations for the homepage (ordered by priority)
app.get("/api/destinations", async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany({ // lowest numbers come first
    });
    res.json(destinations);
  } catch (err) {
    console.error("Destinations Error:", err);
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
});

// Get all activities for the Explore page
app.get("/api/activities", async (req, res) => {
  try {
    const activities = await prisma.activity.findMany();

    res.json(activities);
  } catch (err) {
    console.error("Activities Error:", err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

// Get details for ONE activity
app.get("/api/activities/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await prisma.activity.findUnique({
      where: { id: Number(id) },
    });
    if (!activity) return res.status(404).json({ error: "Activity not found" });
    res.json(activity);
  } catch (err) {
    console.error("Activity Detail Error:", err);
    res.status(500).json({ error: "Error fetching activity details" });
  }
});

//////////////////////////////////
// 2. USER TRIP ROUTES
//////////////////////////////////

// Create a new trip
app.post("/api/trips", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;

    const { tripName, startDate, endDate, description } = req.body;

    const trip = await prisma.trip.create({
      data: {
        tripName,
        description,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        userId: uid,
      },
    });

    res.json(trip);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create trip" });
  }
});

// Get trips for a specific user
app.get("/api/trips", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;

    const trips = await prisma.trip.findMany({
      where: { userId: uid },
      include: {
        savedItems: {
          include: { activity: true },
        },
      },
    });

    res.json(trips);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

// Get ONE specific trip
app.get("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { id } = req.params;

    const trip = await prisma.trip.findFirst({
      where: {
        id: id,        // comes from URL
        userId: uid,   // security: only your trips
      },
      include: {
        savedItems: {
          include: { activity: true },
        },
      },
    });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json(trip);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch trip" });
  }
});

// Save an activity to a trip
app.post("/api/trips/save-activity", async (req, res) => {
  const { tripId, activityId, notes } = req.body;
  try {
    const saved = await prisma.savedActivity.create({
      data: {
        tripId: tripId,
        activityId: Number(activityId),
        notes,
      },
    });
    res.json(saved);
  } catch (err) {
    console.error("Save Activity Error:", err);
    res.status(500).json({ error: "Failed to save activity" });
  }
});

//////////////////////////////////
// Start server
//////////////////////////////////

const PORT = process.env.PORT || 5001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is officially running on http://localhost:${PORT}`);
});
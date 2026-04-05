import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();

// Connect Prisma to Neon using DATABASE_URL
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

//////////////////////////////////
// Trips routes
//////////////////////////////////

// Create a new trip
app.post("/api/trips", async (req, res) => {
  const { userId, title } = req.body;
  try {
    const trip = await prisma.trip.create({
      data: { userId, title },
    });
    res.json(trip);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create trip" });
  }
});

// Get trips for a user
app.get("/api/trips", async (req, res) => {
  const { userId } = req.query;
  try {
    const trips = await prisma.trip.findMany({
      where: { userId },
      include: { Activity: true },
    });
    res.json(trips);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

//////////////////////////////////
// Activities routes
//////////////////////////////////

// Create activity for a trip
app.post("/api/activities", async (req, res) => {
  const { tripId, name, details } = req.body;
  try {
    const activity = await prisma.activity.create({
      data: { tripId, name, details },
    });
    res.json(activity);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create activity" });
  }
});

// Get activities for a trip
app.get("/api/activities", async (req, res) => {
  const { tripId } = req.query;
  try {
    const activities = await prisma.activity.findMany({
      where: { tripId: Number(tripId) },
    });
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

//////////////////////////////////
// Start server
//////////////////////////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { authenticateUser } from "./middleware/authMiddleware.js";

// 1. Load environment variables
dotenv.config();

// Debug
console.log("DB URL:", process.env.DATABASE_URL);

// 2. Initialize Prisma
const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json());

//////////////////////////////////
// 🚀 SOCKET.IO SETUP
//////////////////////////////////

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // change in production
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// make io accessible in routes
app.set("io", io);

io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

//////////////////////////////////
// Test route
//////////////////////////////////

app.get("/", (req, res) => {
  res.send("Nippon Navigator API is running 🚀");
});

//////////////////////////////////
// 1. MASTER CATALOG ROUTES
//////////////////////////////////

app.get("/api/destinations", async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany();
    res.json(destinations);
  } catch (err) {
    console.error("Destinations Error:", err);
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
});

app.get("/api/activities", async (req, res) => {
  try {
    const activities = await prisma.activity.findMany();
    res.json(activities);
  } catch (err) {
    console.error("Activities Error:", err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

app.get("/api/activities/slug/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const activity = await prisma.activity.findUnique({
      where: { slug },
    });

    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.json(activity);
  } catch (err) {
    console.error("Activity Slug Error:", err);
    res.status(500).json({ error: "Error fetching activity by slug" });
  }
});

app.get("/api/activities/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await prisma.activity.findUnique({
      where: { id: Number(id) },
    });

    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.json(activity);
  } catch (err) {
    console.error("Activity Detail Error:", err);
    res.status(500).json({ error: "Error fetching activity details" });
  }
});

//////////////////////////////////
// 2. USER TRIP ROUTES
//////////////////////////////////

app.post("/api/trips", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;

    const trip = await prisma.trip.create({
      data: {
        tripName: req.body.tripName,
        description: req.body.description,
        startDate: req.body.startDate ? new Date(req.body.startDate) : null,
        endDate: req.body.endDate ? new Date(req.body.endDate) : null,
        arrivalLocation: req.body.arrivalLocation || null,
        departureLocation: req.body.departureLocation || null,
        partySize: req.body.partySize ? Number(req.body.partySize) : null,
        userId: uid,
      },
    });

    res.json(trip);
  } catch (err) {
    console.error("TRIP ERROR:", err);
    res.status(500).json({ error: "Failed to create trip." });
  }
});

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

app.get("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { id } = req.params;

    const trip = await prisma.trip.findFirst({
      where: { id, userId: uid },
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

app.put("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { id } = req.params;

    const trip = await prisma.trip.findUnique({ where: { id } });

    if (!trip || trip.userId !== uid) {
      return res.status(404).json({ error: "Trip not found or access denied." });
    }

    const updatedTrip = await prisma.trip.update({
      where: { id },
      data: req.body,
      include: {
        savedItems: {
          include: { activity: true },
        },
      },
    });

    // 🚀 REAL-TIME UPDATE
    const io = req.app.get("io");
    io.emit("tripUpdated", updatedTrip);

    res.json(updatedTrip);
  } catch (err) {
    console.error("Update Trip Error:", err);
    res.status(500).json({ error: "Failed to update trip" });
  }
});

//////////////////////////////////
// Save activity (REAL-TIME HERE)
//////////////////////////////////

app.post("/api/trips/save-activity", async (req, res) => {
  const { tripId, activityId, notes } = req.body;

  try {
    const saved = await prisma.savedActivity.create({
      data: {
        tripId,
        activityId: Number(activityId),
        notes,
      },
    });

    // 🔥 REAL-TIME EMIT
    const io = req.app.get("io");

    const updatedTrip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        savedItems: {
          include: { activity: true },
        },
      },
    });

    io.emit("tripUpdated", updatedTrip);

    res.json(saved);
  } catch (err) {
    console.error("Save Activity Error:", err);
    res.status(500).json({ error: "Failed to save activity" });
  }
});

//////////////////////////////////
// START SERVER
//////////////////////////////////

const PORT = process.env.PORT || 5001;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
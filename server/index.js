import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { authenticateUser } from "./middleware/authMiddleware.js";

dotenv.config();

console.log("DB URL:", process.env.DATABASE_URL);

// Prisma
const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

const app = express();
app.use(cors());
app.use(express.json());

// HTTP + Socket server
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000",
    "https://nippon-navigator.vercel.app"
  ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

app.set("io", io);

// SOCKET CONNECTION
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("joinUserRoom", (userId) => {
    socket.join(userId);
    console.log(`👤 User ${userId} joined room`);
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

//////////////////////////////////
// HEALTH CHECK
//////////////////////////////////
app.get("/", (req, res) => {
  res.send("Nippon Navigator API is running 🚀");
});

//////////////////////////////////
// DESTINATIONS
//////////////////////////////////
app.get("/api/destinations", async (req, res) => {
  try {
    const data = await prisma.destination.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
});

//////////////////////////////////
// ACTIVITIES
//////////////////////////////////
app.get("/api/activities", async (req, res) => {
  try {
    const data = await prisma.activity.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

app.get("/api/activities/slug/:slug", async (req, res) => {
  try {
    const activity = await prisma.activity.findUnique({
      where: { slug: req.params.slug },
    });

    if (!activity) return res.status(404).json({ error: "Not found" });

    res.json(activity);
  } catch (err) {
    res.status(500).json({ error: "Error fetching activity" });
  }
});

app.get("/api/activities/:id", async (req, res) => {
  try {
    const activity = await prisma.activity.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!activity) return res.status(404).json({ error: "Not found" });

    res.json(activity);
  } catch (err) {
    res.status(500).json({ error: "Error fetching activity" });
  }
});

//////////////////////////////////
// CREATE TRIP
//////////////////////////////////
app.post("/api/trips", authenticateUser, async (req, res) => {
  try {
    const uid = req.user?.uid;

    if (!uid) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const parseDate = (date) => {
      const d = new Date(date);
      return isNaN(d.getTime()) ? null : d;
    };

    const trip = await prisma.trip.create({
      data: {
        tripName: req.body.tripName,
        description: req.body.description || null,
        startDate: parseDate(req.body.startDate),
        endDate: parseDate(req.body.endDate),
        arrivalLocation: req.body.arrivalLocation || null,
        departureLocation: req.body.departureLocation || null,
        partySize: Number(req.body.partySize) || null,
        userId: uid,
      },
    });

    res.json(trip);
  } catch (err) {
    console.error("🔥 CREATE TRIP ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

//////////////////////////////////
// GET TRIPS
//////////////////////////////////
app.get("/api/trips", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;

    const trips = await prisma.trip.findMany({
      where: { userId: uid },
      include: {
        savedItems: { include: { activity: true } },
      },
    });

    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

//////////////////////////////////
// GET SINGLE TRIP
//////////////////////////////////
app.get("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const id = req.params.id;

    const trip = await prisma.trip.findFirst({
      where: { id, userId: uid },
      include: {
        savedItems: { include: { activity: true } },
      },
    });

    if (!trip) return res.status(404).json({ error: "Trip not found" });

    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trip" });
  }
});

//////////////////////////////////
// UPDATE TRIP (REAL-TIME)
//////////////////////////////////
app.put("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const id = req.params.id;

    const trip = await prisma.trip.findUnique({ where: { id } });

    if (!trip || trip.userId !== uid) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const updatedTrip = await prisma.trip.update({
      where: { id },
      data: req.body,
      include: {
        savedItems: { include: { activity: true } },
      },
    });

    const io = req.app.get("io");
    io.to(uid).emit("tripUpdated", updatedTrip);

    res.json(updatedTrip);
  } catch (err) {
    res.status(500).json({ error: "Failed to update trip" });
  }
});

//////////////////////////////////
// DELETE TRIP
//////////////////////////////////
app.delete("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const tripId = req.params.id;

    // 1. make sure trip belongs to user
    const trip = await prisma.trip.findFirst({
      where: {
        id: tripId,
        userId: uid,
      },
    });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    // 2. delete related saved activities first
    await prisma.savedActivity.deleteMany({
      where: { tripId },
    });

    // 3. delete trip
    await prisma.trip.delete({
      where: { id: tripId },
    });

    res.json({ success: true });
  } catch (err) {
    console.error("DELETE TRIP ERROR:", err);
    res.status(500).json({ error: "Failed to delete trip" });
  }
});

//////////////////////////////////
// SAVE ACTIVITY
//////////////////////////////////
app.post("/api/trips/save-activity", authenticateUser, async (req, res) => {
  try {
    const { tripId, activityId, notes } = req.body;

    const saved = await prisma.savedActivity.create({
      data: {
        tripId,
        activityId: Number(activityId),
        notes,
      },
    });

    const updatedTrip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        savedItems: { include: { activity: true } },
      },
    });

    const io = req.app.get("io");
    io.to(updatedTrip.userId).emit("tripUpdated", updatedTrip);

    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to save activity" });
  }
});

//////////////////////////////////
// DELETE ACTIVITY (REAL-TIME FIX)
//////////////////////////////////
app.delete("/api/trips/save-activity/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const deleted = await prisma.savedActivity.delete({
      where: { id },
    });

    const updatedTrip = await prisma.trip.findUnique({
      where: { id: deleted.tripId },
      include: {
        savedItems: { include: { activity: true } },
      },
    });

    const io = req.app.get("io");
    io.to(updatedTrip.userId).emit("tripUpdated", updatedTrip);

    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete activity" });
  }
});

//////////////////////////////////
// REORDER ACTIVITIES (DRAG & DROP FIX)
//////////////////////////////////
app.put("/api/trips/save-activity/order", authenticateUser, async (req, res) => {
  try {
    const { order, tripId } = req.body;

    await Promise.all(
      order.map((item) =>
        prisma.savedActivity.update({
          where: { id: item.id },
          data: { order: item.order },
        })
      )
    );

    const updatedTrip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        savedItems: { include: { activity: true } },
      },
    });

    const io = req.app.get("io");
    io.to(updatedTrip.userId).emit("tripUpdated", updatedTrip);

    res.json(updatedTrip);
  } catch (err) {
    res.status(500).json({ error: "Failed to reorder activities" });
  }
});

//////////////////////////////////
// START SERVER
//////////////////////////////////
const PORT = process.env.PORT || 5001;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
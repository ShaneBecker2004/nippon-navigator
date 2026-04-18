import express from "express";
import cors from "cors";
import dotenv from "dotenv";
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

// Test route
app.get("/", (req, res) => {
  res.send("Nippon Navigator API is running 🚀");
});

//////////////////////////////////
// 1. MASTER CATALOG ROUTES
//////////////////////////////////

// Get all destinations
app.get("/api/destinations", async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany();
    res.json(destinations);
  } catch (err) {
    console.error("Destinations Error:", err);
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
});

// Get all activities
app.get("/api/activities", async (req, res) => {
  try {
    const activities = await prisma.activity.findMany();
    res.json(activities);
  } catch (err) {
    console.error("Activities Error:", err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

//////////////////////////////////
// ✅ NEW: Get activity by SLUG
//////////////////////////////////
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

//////////////////////////////////
// EXISTING: Get activity by ID
//////////////////////////////////
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

// Create trip
app.post("/api/trips", authenticateUser, async (req, res) => {
  try {
    console.log("🔥 AUTH USER:", req.user);

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

  if (err.code === "P2002") {
    return res.status(400).json({
      error: "A trip with this name already exists.",
    });
  }

  return res.status(500).json({
    error: "Failed to create trip.",
  });
}
});

// Get user trips
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

// Get ONE trip
app.get("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { id } = req.params;

    const trip = await prisma.trip.findFirst({
      where: {
        id: id,
        userId: uid,
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

// Update trip details
app.put("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { id } = req.params;
    const { description, arrivalLocation, departureLocation, partySize } = req.body;

    const trip = await prisma.trip.findUnique({
      where: { id },
    });

    if (!trip || trip.userId !== uid) {
      return res.status(404).json({ error: "Trip not found or access denied." });
    }

    const updatedTrip = await prisma.trip.update({
      where: { id },
      data: {
        description,
        arrivalLocation,
        departureLocation,
        partySize: partySize ? parseInt(partySize) : null,
      },
      include: {
        savedItems: {
          include: { activity: true },
        },
      },
    });

    res.json(updatedTrip);
  } catch (err) {
    console.error("Update Trip Error:", err);
    res.status(500).json({ error: "Failed to update trip" });
  }
});

// Delete a trip
app.delete("/api/trips/:id", authenticateUser, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { id } = req.params;

    const trip = await prisma.trip.findUnique({
      where: { id },
      include: {
        savedItems: true,
      },
    });

    if (!trip || trip.userId !== uid) {
      return res.status(404).json({ error: "Trip not found or access denied." });
    }

    if (trip.savedItems.length > 0) {
      await prisma.savedActivity.deleteMany({
        where: { tripId: id },
      });
    }

    await prisma.trip.delete({
      where: { id },
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Delete Trip Error:", err);
    res.status(500).json({ error: "Failed to delete trip" });
  }
});

// Save activity to trip
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

// Update saved activity order
app.put("/api/trips/save-activity/order", authenticateUser, async (req, res) => {
  const { tripId, order } = req.body;

  if (!tripId || !Array.isArray(order)) {
    return res.status(400).json({ error: "Trip ID and order array are required." });
  }

  try {
    const uid = req.user.uid;
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip || trip.userId !== uid) {
      return res.status(404).json({ error: "Trip not found or access denied." });
    }

    const updates = order.map((item) =>
      prisma.savedActivity.update({
        where: { id: Number(item.id) },
        data: { order: Number(item.order) },
      })
    );

    await Promise.all(updates);

    res.json({ success: true });
  } catch (err) {
    console.error("Save order error:", err);
    res.status(500).json({ error: "Failed to save activity order" });
  }
});

// Delete saved activity from trip
app.delete("/api/trips/save-activity/:id", authenticateUser, async (req, res) => {
  const { id } = req.params;

  try {
    const savedActivity = await prisma.savedActivity.findUnique({
      where: { id: Number(id) },
      include: { trip: true },
    });

    if (!savedActivity || savedActivity.trip.userId !== req.user.uid) {
      return res.status(404).json({ error: "Saved activity not found." });
    }

    await prisma.savedActivity.delete({
      where: { id: Number(id) },
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Delete saved activity error:", err);
    res.status(500).json({ error: "Failed to delete saved activity" });
  }
});

//////////////////////////////////
// Start server
//////////////////////////////////

const PORT = process.env.PORT || 5001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is officially running on http://localhost:${PORT}`);
});
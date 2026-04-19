import admin from "../config/firebaseAdmin.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || typeof header !== "string") {
      return res.status(401).json({ error: "No token provided" });
    }

    if (!header.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Invalid token format" });
    }

    const token = header.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({ error: "Missing token" });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ error: "Invalid token" });
  }
};
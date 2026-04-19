import admin from "../config/firebaseAdmin.js";

export const authenticateUser = async (req, res, next) => {
  const header = req.headers.authorization;

  console.log("AUTH HEADER:", header); // 👈 add here

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = header.split("Bearer ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);

    console.log("TOKEN VERIFIED UID:", decoded.uid); // 👈 add here

    req.user = decoded;
    next();
  } catch (err) {
    console.error("🔥 TOKEN VERIFY FAILED:", err.message); // 👈 add here
    return res.status(401).json({ error: "Invalid token" });
  }
};
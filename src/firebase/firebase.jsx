import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHxYg7Ueay9h7uVVt4B_xNtSZ5VfNImUc",
  authDomain: "nippon-navigator-2026.firebaseapp.com",
  projectId: "nippon-navigator-2026",
  storageBucket: "nippon-navigator-2026.firebasestorage.app",
  messagingSenderId: "263954708753",
  appId: "1:263954708753:web:806303ddcfb46b4a7e74b0",
  measurementId: "G-MGYCR5N2SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
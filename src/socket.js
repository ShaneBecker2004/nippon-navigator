import { io } from "socket.io-client";

export const socket = io("https://nippon-navigator.onrender.com", {
  autoConnect: false,
  transports: ["websocket"],
});
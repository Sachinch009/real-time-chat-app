import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const userSocketMap = {}; // Map userId -> socketId

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:5173", "http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User connected:", socket.id, "with userId:", userId);
  
  if (userId && userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }

  console.log("Current userSocketMap on connect:", userSocketMap);

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id, "for userId:", userId);
    delete userSocketMap[userId];
    console.log("Current userSocketMap on disconnect:", userSocketMap);
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server, userSocketMap };

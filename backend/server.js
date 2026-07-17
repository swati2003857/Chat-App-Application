import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

import { app, server } from "./socket/socket.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const DEFAULT_PORT = Number(process.env.PORT || 5002);

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// static
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// start server
const startServer = (port) => {
  server.removeAllListeners("error");
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.warn(`⚠️ Port ${port} is busy. Trying ${port + 1}...`);
      startServer(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, () => {
    connectToMongoDB();
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
};

startServer(DEFAULT_PORT);
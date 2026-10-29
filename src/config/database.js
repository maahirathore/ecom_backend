import mongoose from "mongoose";
import env from "../config/env.js";
import logger from "../config/logger.js";

export default async function connectDB() {
  const mongoUrl = process.env.MONGO_URL || env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("MONGO_URL is not configured");
  }

  await mongoose.connect(mongoUrl, {
    serverSelectionTimeoutMS: 10000,
  });

  logger.info("MongoDB connected successfully");

  logger.info(
    `MongoDB topology: ${mongoose.connection.getClient()
      .topology?.description?.type || "initializing"}`
  );
}
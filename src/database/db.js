import { connect } from "mongoose";
import env from "../config/env.js";
import logger from "../config/logger.js";
import dotenv from "dotenv"
dotenv.config()
export default async function connectDB() {
  await connect(env.MONGO_URL||process.env.MONGO_URL);
  logger.info("your database is connected successfully");
}


import { Router } from "express";
import authController from "./auth.controller.js"
import rateLimitForLogin from "../../middlewares/rateLimitMiddForLogin.js";
const authRoutes=Router();
authRoutes.post("/createUser",authController.createUser)
authRoutes.post("/sendOtp", authController.sendOtp);
authRoutes.post("/verifyOtp", authController.verifyOtp);
authRoutes.post("/login", rateLimitForLogin, authController.userLogin);
export default authRoutes
import addToWishlistController from "./addToWishlist.controller.js";
import { Router } from "express";
import ifUserLogin from "./../../../middlewares/userValidation.mid.js";
const addToWishlistRouter=Router()
addToWishlistRouter.post("/addToWishlist",ifUserLogin,addToWishlistController.addToWishlist)
export default addToWishlistRouter
import addToWishlistController from "./addToWishlist.controller.js";
import { Router } from "express";
const addToWishlistRouter=Router()
addToWishlistRouter.post("/addToWishlist",addToWishlistController.addToWishlist)
export default addToWishlistRouter
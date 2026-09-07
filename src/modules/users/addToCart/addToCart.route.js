import { Router } from "express";
import addToCartController from "./addToCart.controller.js";
const addToCartRouter=Router()
addToCartRouter.post("/addToCart",addToCartController.addToCart)
export default addToCartRouter
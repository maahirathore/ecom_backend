import { Router } from "express";
import addToCartController from "./addToCart.controller.js";
import ifUserLogin from "../../../middlewares/userValidation.mid.js";
const addToCartRouter=Router()
addToCartRouter.post("/addToCart",ifUserLogin,addToCartController.addToCart)
export default addToCartRouter
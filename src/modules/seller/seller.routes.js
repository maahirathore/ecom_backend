import sellerController from "./seller.controller.js";

import { Router } from "express";
const sellerRouter=Router()
sellerRouter.post("/sellerCreated", sellerController.createSeller)
sellerRouter.get("/searchSellerByName",sellerController.searchSellerByName)
export default sellerRouter
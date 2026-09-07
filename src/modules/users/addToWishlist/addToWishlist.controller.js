import { success } from "zod";
import addToWishlistService from "./addToWishlist.service.js";
import data from "../../../config/env.js";
const addToWishlist=async(req,res)=>{
try {
    const {userId,productId}=req.body
    const addToWishlistData=await addToWishlistService.addToWishlist(userId,productId)
  res.status(201).json({
    message:"Added to the wishlist",
    addToWishlist:addToWishlistData,
    success:true,
    count:addToWishlistData.length
  })
} catch (error) {
 res.status(400).json({
    message:error.message,
    success:false
 })   
}
}
export default {addToWishlist}
import addToCartService from "./addToCart.service.js";
const addToCart=async(req,res)=>{
try {
    const {userId,productId,quantity}=req.body
    const addToCartData=await addToCartService.addToCart(userId,productId,quantity)
   res.status(201).json({
            success:true,
            message:"Product Added to Cart SuccessFully!",
            data:addToCartData
        });
} catch (error) {
  res.status(400).json({ success: false, message: error.message });
}
}
export default {addToCart}
import addToCartModel from "../../../models/addToCart.model.js";
const addToCart=async(userId,productId,quantity)=>{
try {
    
  if (!userId || !productId|| !quantity) {
   throw new Error("all fields are required") 
  } 
  if(quantity<=0){
throw new Error ("quantity should be greater than 0")
  }
  const addToCartData=await addToCartModel.create({
    userId,productId,quantity
  })
  if(!addToCartData)throw new Error("Not added to cart")
    return addToCartData
} catch (error) {
   throw new Error(error.message) 
}
}
export default {addToCart}
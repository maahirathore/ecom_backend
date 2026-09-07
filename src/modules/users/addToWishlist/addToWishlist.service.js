import addToWishlistModel from "../../../models/addToWishlist.model.js";
const addToWishlist=async(userId,productId)=>{
    console.log(userId, productId)
try {
if(!userId||!productId)throw new Error("All fields are required") 
    const addToWishlistData=await addToWishlistModel.create({userId,productId})   
if(!addToWishlistData)throw new Error("Not Added to the Wishlist")
    return addToWishlistData
} catch (error) {
    throw new Error(error.message)
}
}
export default {addToWishlist}
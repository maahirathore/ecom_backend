import mongoose from "mongoose";
const addToWishlistSchema=mongoose.Schema({
    userId:{
ref:"userModel",required:true,
type:mongoose.Schema.Types.ObjectId
    },
    productId:{
ref:"Product",required:true,
type:mongoose.Schema.Types.ObjectId
    }
})
export default mongoose.model("addToWishlist",addToWishlistSchema)
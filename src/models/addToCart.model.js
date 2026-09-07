import mongoose from "mongoose";
const addToCartSchema=new mongoose.Schema({
    userId:{
required:true,
ref:"userModel",
type:mongoose.Schema.Types.ObjectId,

    },
    productId:{
required:true,
type:mongoose.Schema.Types.ObjectId,
ref:"Product",
    },
    quantity:{
required:true,
type:Number
    }
})
export default mongoose.model("addToCart",addToCartSchema)
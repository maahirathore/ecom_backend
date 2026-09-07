import mongoose from "mongoose";
const sellerSchema=new mongoose.Schema({
    sellerName:{
required:true,
type:String
    },
    sellerEmail:{
required:true,
type:String
    },
    sellerPassword:{
required:true,
type:String
    },
    sellerNumber:{
required:true,
type:Number
    },
    sellerImage:{
required:true,
type:String
    },
    sellerAddress:{
required:true,
type:String
    }
})
export default mongoose.model("seller",sellerSchema)
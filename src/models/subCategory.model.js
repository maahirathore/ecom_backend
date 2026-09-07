import Mongoose  from "mongoose"
const subCategorySchema=new Mongoose.Schema({
subCategoryName:{
    required:true,
    type:String
},
description:{
 required:true,
    type:String
},
category:{
    type:Mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
},
image:{
    type:String,
    // required:true
}

})
export default Mongoose.model("SubCategory",subCategorySchema)
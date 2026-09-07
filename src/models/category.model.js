import Mongoose  from "mongoose"
const categorySchema=new Mongoose.Schema({
categoryName:{
required:true,
type:String
},
description:{
required:true,
type:String
},
image:{
// required:true,
type:String
// type:[String]
}
})
export default Mongoose.model("Category",categorySchema)
import Mongoose from "mongoose";
const productSchema = new Mongoose.Schema({
  productName: {
    type: String,
    
  },
  price: {
    type: Number,
    
  },
  salesPrice: {
   
    type: Number,
  },
  description: {
    
    type: String,
  },
  image: {
    
    type: [String],
  },
  category: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Category",
    
  },
  subCategory: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    
  },
  stock: {
    type: Number,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
    
  },
});
export default Mongoose.model("Product", productSchema);

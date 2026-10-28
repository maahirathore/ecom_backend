import sellerModel from "./../../models/seller.model.js"
const createSeller=async(sellerData,sellerImages)=>{
try {
    const {sellerName, sellerEmail,sellerPassword,sellerNumber, sellerAddress}
    =sellerData
    console.log(sellerName)
    if(!sellerName|| !sellerEmail|| !sellerPassword|| !sellerNumber|| ! sellerAddress)throw new Error("All fields are required.")
    const seller= await sellerModel.create({
sellerName, sellerEmail,sellerPassword,sellerNumber, sellerAddress,sellerImage:sellerImages
    })
    if(!seller)throw new Error("seller not created")
        return seller
} catch (error) {
  throw new Error(error.message)  
}
}
const searchSellerByName=async(name)=>{
try {
 const sellerName=name
 const getSeller =await sellerModel.find({sellerName:sellerName})  
 if (!getSeller) {
 throw new Error("seller not found.")   
 } else {
   return getSeller 
 }
} catch (error) {
 throw new Error(error.message)   
}
}
const getAllSellers=async()=>{
 try {
 const getAll=await sellerModel.find()
 if (!getAll) {
  
 } else {
  
 } 
 } catch (error) {
 throw new Error(error.message) 
 } 
}
//  getAllSellers, getSellerById, getSellerByName
export default {createSeller, searchSellerByName}
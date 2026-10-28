import { success } from "zod"
import sellerService from "./../seller/seller.service.js"
const createSeller=async(req,res)=>{
try {
    const sellerData=req.body
    const sellerImage=req.file?req.file.path:null
    const sellerCreated=await sellerService.createSeller(sellerData, sellerImage)
 if (!sellerCreated) {
 res.status(500).json({
    message:"Unable to create seller.",
    success:false
 })   
 } else {
    res.status(200).json({
        message:"done creating the seller",
        success:true,
        seller:sellerCreated,
        count:sellerCreated.length
    })
 }   
} catch (error) {
res.status(500).json({
    success:false,
    message:error.message
})    
}
}
const searchSellerByName=async(req,res)=>{
    try {
    const sellerName=req.query.name  
    const searchSeller=await sellerService.searchSellerByName(sellerName)   
    if (!searchSeller) {
       res.status(500).json({
        message:"no such seller found",
        success:false
       }) 
    } else {
      res.status(200).json({
        message:"fetched successfully",
        seller:searchSeller,
        count:searchSeller.length,
        success:true
      })  
    }
    } catch (error) {
    throw new Error(error.message)    
    }
}
export default {createSeller, searchSellerByName}
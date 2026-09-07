import { success } from "zod";
import productsService from "./products.service.js";
import { fa } from "zod/v4/locales";
const createProduct=async(req,res)=>{
try {
const data=req.body
const imageData=req.files.map((file)=>{
return file.path.replace(/\\/g,"/")
})  
const createProduct  =await productsService.createProduct(data,imageData)
if (!createProduct) {
    res.status(500).json({
        success:false,
        message:"not done",
    })
} else {
   res.status(201).json({
    success:true,
    message:"done",
    product:createProduct,
    count:createProduct.length
   }) 
}
} catch (error) {
 throw new Error("error in controller")   
}
}
const getAllProduct=async(req,res)=>{
   try {
         const getAll=await productsService.getAllProduct()
     if (!getAll) {
       res.status(500).json({
        message:"Product not Found",
        success:false
       }) 
     } else {
        res.status(200).json({
            message:"product found",
            success:true,
            product:getAll,
            count:getAll.length
        })
     }   
    } catch (error) {
     throw new Error(error.message)   
    }
}
const getProductByCategoryId=async(req,res)=>{
    try {
        const categoryId=req.params.id
        const getProduct=await productsService.getProductByCategoryId(categoryId)
    if (!getProduct) {
        res.status(500).json({
            message:"product not found",
            success:false
        })
    } else {
        res.status(200).json({
            message:"fetch successfull",
            success:true,
            product:getProduct,
            count:getProduct.length
        })
    }    
    } catch (error) {
      throw new Error(error.message)  
    }
}
const getProductByName=async(req,res)=>{
   try {
    const data=req.query.name
    const productData=await productsService.getProductByName(data)
    if (!productData) {
     res.status(500).json({
        success:false,
        message:"product not found."
     })   
    } else {
      res.status(200).json({
        success:true,
        message:"found",
        product:productData,
        count:productData.length
      })  
    } 
   } catch (error) {
    throw new Error("error")
   }
}
const updateProductById=async(req,res)=>{
    try {
        const updatedData=req.body
        const productId=req.params.id
        const data=await productsService.updateProductById(productId,updatedData)
       if (!data) {
        throw new Error("not found or not updated")
       } else {
         res.status(200).json({
        success:true,
        message:"updated",
        updatedProduct:data,
        count:data.length
      }) 
       } 
    } catch (error) {
      throw new Error (error.message)  
    }
  
}
  const sellerIdProduct=async(req,res)=>{
        try {
          const sellerId=req.params.id
          const sellerData=await productsService.sellerIdProduct(sellerId)
          if(!sellerData){
 res.status(500).json({
            message:"Error while finding",
            success:false
          }) 
          }else{
res.status(200).json({
    message:"Successfully fetched",
    seller:sellerData,
    count:sellerData.length,
    success:true
})
          }

        } catch (error) {
          res.status(500).json({
            message:error.message,
            success:false
          })  
        }
    }
export default {sellerIdProduct, updateProductById,createProduct,getAllProduct,getProductByCategoryId,getProductByName}
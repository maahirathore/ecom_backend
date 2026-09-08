import { success } from "zod";
import subCategoryService from "./subCategory.service.js";
const subCategoryCreate=async(req,res)=>{
try {
    const data=req.body
    const subCategory=await subCategoryService.subCategoryCreate(data)
  if (!subCategory) {
    res.status(500).json({
        message:"error in controller",
        success:false,

    })
  } else {
    res.status(200).json({message:"done",subCategory:subCategory,success:true, count:subCategory.length})
  }  
} catch (error) {
 throw new Error(error.message)   
}
}
const getAllSubCategory=async(req,res)=>{
try {
  const getAllData=await subCategoryService.getAllSubCategory()
  if (!getAllData) {
   res.status(500).json({
        message:"Data not found.",
        success:false,

    })  
  } else {
    res.status(200).json({message:"done",getAll:getAllData,success:true, count:getAllData.length})
  }
  
} catch (error) {
throw new Error(error.message)   
}
}

const subCategoryById=async(req,res)=>{
  const subCategoryId=req.params.id
  const subCategoryByIdData=await subCategoryService.subCategoryById(subCategoryId)
try {
  if (!subCategoryByIdData) {
   res.status(500).json({
        message:"Data not found.",
        success:false,

    })  
  } else {
    res.status(200).json({message:"done",subCatData:subCategoryByIdData,success:true, count:subCategoryByIdData.length})
  } 
} catch (error) {
 throw new Error(error.message)  
}
}
export default {subCategoryCreate, getAllSubCategory, subCategoryById }
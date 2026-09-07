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
export default {subCategoryCreate}
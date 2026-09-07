import subCategoryModel from "../../models/subCategory.model.js";
const subCategoryCreate=async(data)=>{

    try {
       const {subCategoryName,description,category}=data
if (!subCategoryName||!description||!category) {
    throw new Error("error all field required")
} else {
 const subCategory=await subCategoryModel.create({subCategoryName,description,category})   
 if (!subCategory) {
   throw new Error ("No sub Category") 
 } else {
  return subCategory  
 }
}     
    } catch (error) {
      throw new Error(error.message)  
    }
}
export default {subCategoryCreate}
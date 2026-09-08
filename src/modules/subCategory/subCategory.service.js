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
const getAllSubCategory=async()=>{
  const getAllData=await subCategoryModel.find()
  try {
   if (!getAllData) {
    throw new Error("Sub CAtegory Data not fetched")
   } else {
    return getAllData
   } 
  } catch (error) {
    throw new Error(error.message)
  }
}
const subCategoryById=async(id)=>{
  const subCategoryId=id
  const getData=await subCategoryModel.find({subCategoryId:subCategoryId})
  try {
   if (!getData) {
    throw new Error("Sub CAtegory Data not fetched")
   } else {
    return getData
   }   
  } catch (error) {
    throw new Error(error.message) 
  }
}
export default {subCategoryCreate, getAllSubCategory, subCategoryById}
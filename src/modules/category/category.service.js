import category from "../../models/category.model.js";
import categoryController from "./category.controller.js";
const createCategory = async (data, imagePath) => {
  try {
    const { categoryName, description } = data;
    console.log("service",data)
    if (!categoryName || !description) {
      throw new Error("All field are required.");
    }
    if (!imagePath) {
      throw new Error("category image is required");
    }
    console.log(data,imagePath)
    const categoryCreated = await category.create({
      categoryName,
      description,
      image: imagePath,
    });
    if (!categoryCreated) {
      throw new Error("Category not found , error");
    } else {
      return categoryCreated;
    }
  } catch (error) {
    throw new Error("Category not found , error");
  }
};
const searchCategoryByName=async(categoryName)=>{
try {
  const categoryName=categoryName;
  const categoryData=await category.findOne(categoryName)
  if (!categoryData) {
    throw new Error ("no such category exist.")
  } else {
    return categoryData
  }
} catch (error) {
 throw new Error(error.message) 
}
}
const getAllCategory=async()=>{
  try {
   const getAll=await category.find()
   if(!getAll){
throw new Error("category not found.")
   } 
   return getAll
  } catch (error) {
  throw new Error(error.message)  
  }
}
const getCategoryById=async(id)=>{
try {
  const categoryId=id
const categoryById=await categoryController.find({categoryId:categoryId})
if (!categoryById) {
  throw new Error("data not found")
} else {
  return categoryById
}
} catch (error) {
 throw new Error(error.message) 
}
}
export default { createCategory,searchCategoryByName, getAllCategory,getCategoryById };

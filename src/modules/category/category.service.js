import category from "../../models/category.model.js";
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
export default { createCategory,searchCategoryByName };

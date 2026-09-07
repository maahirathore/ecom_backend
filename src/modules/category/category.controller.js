import { success } from "zod";
import categoryService from "./category.service.js";
const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const imagePath = req.file.path.replace(/\\/g, "/");
    console.log(data)
    console.log(imagePath);
    
    // const imagePath=req.files.map((file)=>file.path.replace(/\\/g,"/"))
    const categoryCreated = await categoryService.createCategory(
      data,
      imagePath,
    );
    if (!categoryCreated) {
      res
        .status(500)
        .send({ message: "error in controller in res", success: false });
    } else {
      res
        .status(200)
        .send({
          message: "category created",
          category: categoryCreated,
          success: true, 
          // respected response
          count: categoryCreated.length,
        });
      return categoryCreated;
    }
  } catch (error) {
    console.log(error)
    throw new Error("error from controller side ",error.message);
  }
};

const searchCategoryByName=async(req,res)=>{
  try {
    const categoryName=req.query.categoryName
    const categoryData=await categoryService.searchCategoryByName(categoryName)
    res.status(200).send({
success:true,
message:"done fetching",
categoryData:categoryData,
count:categoryData.length
    })
  } catch (error) {
    res.status(500).send({
      success:false,
      message:error.message
    })
  }
}
export default { createCategory , searchCategoryByName};

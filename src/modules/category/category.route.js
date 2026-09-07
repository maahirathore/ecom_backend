import categoryController from "./category.controller.js"
import express, { Router } from "express";
import multer from "multer";
const categoryRouter=Router()
const imageStorage = multer.diskStorage({
  destination: (req, file, cd) => cd(null, "uploads/categoryImages"),
  filename: (req, file, cd) => {
    cd(null, Date.now() + "-" + file.originalname);
  },
});
// const imageFilter = (req, file, cd) => {
//   const allowedTypes = /jpeg|jpg|png|gif|webp/;
//   const extName = allowedTypes.test(
//     path.extname(file.originalname).toLowerCase(),
//   );
//   const mimeType = allowedTypes.test(file.mimetype);
//   if(!extName && !mimeType){
//     return cd(null,true)
//   }else{
//     cd(new Error(`Only Image Files are Allowed `), false);
//   }
// };
const upload = multer({ 
    storage: imageStorage,
    // fileFilter: imageFilter,
    limits: { fileSize: 2 * 1024 * 1024 } 
});
categoryRouter.post("/createCategory",upload.single("image"),categoryController.createCategory)
categoryRouter.get("/searchCategoryByName",categoryController.searchCategoryByName)
export default categoryRouter
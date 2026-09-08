import { Router } from "express";
import subCategoryController from "./subCategory.controller.js";
const subCategoryRouter=Router()
subCategoryRouter.post("/createSubCategory",subCategoryController.subCategoryCreate)
subCategoryRouter.get("/getAllSubCategory",subCategoryController.getAllSubCategory)
subCategoryRouter.get("/getSubCategoryById/:id",subCategoryController.subCategoryById)
// get by id subcat
// getAll subcat
export default subCategoryRouter
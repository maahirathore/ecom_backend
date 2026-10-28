import { Router } from "express";
import ifUserLogin from "../../middlewares/userValidation.mid.js";
import subCategoryController from "./subCategory.controller.js";
const subCategoryRouter=Router()
subCategoryRouter.post("/createSubCategory",ifUserLogin,subCategoryController.subCategoryCreate)
subCategoryRouter.get("/getAllSubCategory",subCategoryController.getAllSubCategory)
subCategoryRouter.get("/getSubCategoryById/:id",subCategoryController.subCategoryById)
// get by id subcat
// getAll subcat
export default subCategoryRouter
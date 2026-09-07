import { Router } from "express";
import subCategoryController from "./subCategory.controller.js";
const subCategoryRouter=Router()
subCategoryRouter.post("/createSubCategory",subCategoryController.subCategoryCreate)
export default subCategoryRouter
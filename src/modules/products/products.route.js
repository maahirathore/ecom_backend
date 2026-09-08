import productsController from "./products.controller.js";
import { Router } from "express";
import multer from "multer";
const productRouter=Router()
const imageStorage=multer.diskStorage({
    destination:(req,file,cd)=>cd(null,"uploads/productImage"),
    filename:(req,file,cd)=>cd(null,Date.now()+"-"+file.originalname)
})
const uploads=multer({
    storage:imageStorage,
    limits:{fileSize:2*1024*1024}
})
productRouter.post("/createProduct",uploads.array("image",5),productsController.createProduct)
productRouter.get("/getAllProduct",productsController.getAllProduct)
productRouter.get("/getProductByCategoryId/:id",productsController.getProductByCategoryId)
productRouter.get("/productByName",productsController.getProductByName)
productRouter.patch("/updateProductById/:id",productsController.updateProductById)
productRouter.get("/searchProductBySellerId/:id",productsController.sellerIdProduct)
productRouter.get("/filterProduct",productsController.filterProduct)
// update
// add to cart
//  add to wishlist
// review
// payment 
export default productRouter
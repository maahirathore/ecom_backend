import productsController from "./products.controller.js";
import { Router } from "express";
import ifUserLogin from "../../middlewares/userValidation.mid.js";
import rateLimitForGettingProduct from "../../middlewares/rateLimitMiddForGettingProduct.js";
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
productRouter.post("/createProduct",ifUserLogin,uploads.array("image",5),productsController.createProduct)
productRouter.get("/getAllProduct",productsController.getAllProduct)
productRouter.get("/getProductByCategoryId/:id",productsController.getProductByCategoryId)
productRouter.get("/productByName",productsController.getProductByName)
productRouter.patch("/updateProductById/:id",ifUserLogin,productsController.updateProductById)
productRouter.get("/searchProductBySellerId/:id",productsController.sellerIdProduct)
productRouter.get("/filterProduct",productsController.filterProduct)
// productRouter.post("/createProductByReplication",(req, res, next) => {
//     console.log("Replication route reached");
//     next();
//   }, productsController.createProductByReplication)
// productRouter.get("/getProductByReplication", productsController.productGetByReplication)
productRouter.post("/postProduct",productsController.createProducts)
productRouter.get("/getProduct",productsController.getProducts)
// update
// add to cart
// add to wishlist
// review
// payment 
export default productRouter
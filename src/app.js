import express from "express";
import securityMiddleware from "./middlewares/security.middleware.js";
import GoogleMiddleware from "./middlewares/googleOauth.middleware.js";
import authRoutes from "./modules/auth/auth.route.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import categoryRouter from "./modules/category/category.route.js";
import subCategoryRouter from "./modules/subCategory/subCategory.routes.js";
import productRouter from "./modules/products/products.route.js";
import addToCartRouter from "./modules/users/addToCart/addToCart.route.js";
import addToWishlistRouter from "./modules/users/addToWishlist/addToWishlist.route.js";
export default function createApp() {
  const app = express();
app.use("/uploads",express.static("uploads"))
  securityMiddleware(app);
  GoogleMiddleware();
app.use("/api/addToCart",addToCartRouter)
  app.use("/api/user", authRoutes);
  app.use("/api/addToWishlist",addToWishlistRouter)
  app.use("/api/category",categoryRouter)
  app.use("/api/subCategory",subCategoryRouter)
  app.use("/api/product",productRouter)
  app.get("/",(req,res)=>{res.send("Ecommerce platform")})

  app.use(errorHandler);
  return app;
}

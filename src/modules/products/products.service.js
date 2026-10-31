import productModel from "../../models/product.model.js";
const createProduct = async (data, image) => {
  try {
    const {
      productName,
      price,
      salesPrice,
      description,
      category,
      subCategory,
      stock,
    } = data;
    if (
      !productName &&
      !price &&
      !salesPrice &&
      !description &&
      !category &&
      !subCategory &&
      !stock
    ) {
      throw new Error("All fields are required.");
    }
    const createProduct = await productModel.create({
      productName,
      price,
      salesPrice,
      description,
      category,
      subCategory,
      stock,
      image: image,
    });
    if (!createProduct) {
      throw new Error("product not created");
    }
    return createProduct;
  } catch (error) {
    throw new Error("error in service.");
  }
};
const getAllProduct = async () => {
  try {
    const getAll = await productModel.find();
    if (!getAll) {
      throw new Error("error");
    } else {
      return getAll;
    }
  } catch (error) {
    throw new Error(error.messsage);
  }
};
const getProductByCategoryId = async (id) => {
  try {
    const getProduct = await productModel.find({ category: id });
    if (!getProduct) {
      throw new Error("Product not found ");
    } else {
      return getProduct;
    }
  } catch (error) {
    throw new Error(error.messsage);
  }
};
const getProductByName = async (data) => {
  try {
    const productData = data;
    const productDataByName = await productModel.find({
      productName: { $regex: productData, $options: "i" },
    });
    if (!productDataByName) {
      throw new Error("product not found.");
    } else {
      return productDataByName;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateProductById = async (productId, updatedData) => {
  try {
    const data = await productModel.findByIdAndUpdate(productId, updatedData, {
      new: true,
    });
    if (!data) {
      throw new Error("data not found");
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const sellerIdProduct = async (id) => {
  try {
    const sellerId = id;
    if (!sellerId) throw new Error("Id not found");
    const sellerData = await productModel.find({ createdBy: sellerId });
    if (!sellerData) {
      throw new Error("Data Not Found");
    } else {
      return sellerData;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const filterProduct = async (filterData) => {
  try {
    const { category, minPrice, maxPrice } = filterData;
    if (!category && !minPrice && !maxPrice)
      throw new Error("All fields are required.");
    const minPriceValue = Number(minPrice);
    const maxPriceValue = Number(maxPrice);
    console.log(maxPrice,minPrice)
    const filteredData = await productModel.find({
      category: category,
      salesPrice: {
        $lte: maxPriceValue,
        $gte: minPriceValue,
      },
    });
    if (!filteredData) {
      throw new Error("Data not found");
    } else {
      return filteredData;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// const createProductByReplication = async (data) => {
//   try{
//     const {productName,price}=data
//     if(!productName && !price){
//       throw new Error("All fields are required")
//     }
//     const createProduct=await productModel.insertOne({productName,price})
//     if(!createProduct){
//       throw new Error("product not created")
//     }else{
//       return createProduct
//     }
//   }
//   catch(error){
// throw new Error(error.message)
//   }
// }
// const productGetByReplication=async()=>{
//   try{
// const productData=await productModel.find()
//   if(!productData){
//     throw new Error("data not found")
//   }else{
//     return productData
//   }
//   }catch(error){
// throw new Error(error.message)
//   }
// }


const createProducts = async (productData, images) => {
  const {
    productName,
    price,
    
  } = productData;

  if (
    !productName ||
    price == null 
  ) {
    throw new Error("Required product fields are missing");
  }

  return await productModel.create({
    productName,
    price
  });
};

// READ: Secondary preferred
const getProducts = async () => {
  return await productModel
    .find({})
    .read("secondaryPreferred")
    .exec();
};





export default {
  createProduct,
  sellerIdProduct,
  getAllProduct,
  getProductByCategoryId,
  getProductByName,
  updateProductById,
  filterProduct,
  
  
  createProducts,
 getProducts 
};
// $regex:productName,$options:"i"
// i means case insensitive
// this is the mongodb query
// 1
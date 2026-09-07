import sellerModel from "./../../models/seller.model.js"
const createSeller=async(sellerData,sellerImages)=>{
try {
    const {sellerName, sellerEmail,sellerPassword,sellerNumber, sellerAddress}
    =sellerData
    if(!sellerName|| !sellerEmail|| !sellerPassword|| !sellerNumber|| ! sellerAddress)throw new Error("All fields are required.")
    const seller= await sellerModel.create({
sellerName, sellerEmail,sellerPassword,sellerNumber, sellerAddress,sellerImage:sellerImages
    })
    if(!seller)throw new Error("seller not created")
        return seller
} catch (error) {
  throw new Error(error.message)  
}
}

export default {createSeller}
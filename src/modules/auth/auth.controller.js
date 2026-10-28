
import { success } from "zod";
import authService from "./auth.service.js";
const createUser=async(req,res)=>{
  try {
    const data=req.body
    console.log("con",data)
    const createData=await authService.createUser(data)
    if (!createData) {
     res.status(500).json({
message:"User not created",
success:false
     }) 
    } else {
      res.status(200).json({
        message:"User created",
        success:true,
        createdData:createData,
        count:createData.length
      })
    }
  } catch (error) {
   throw new Error(error.message) 
  }
}
const sendOtp=async(req,res)=>{
  try {
   const {email}=req.body
   console.log("email",email)
    const sendEmail=await authService.sendOtp(email)
    if (!sendEmail) {
    res.status(500).json({
success:false,
message:"Unable to send otp"
    })  
    } else {
     res.status(200).json({
      message:"otp send successfully",
      sendEmailToUser:sendEmail,
      success:true
     }) 
    }
  } catch (error) {
   throw new Error(error.message) 
  }
}

const verifyOtp=async(req,res)=>{
  try{
    const {email,otp}=req.body
    const verifyOtp=await authService.verifyOtp(email,otp)
    if(!verifyOtp){
      res.status(500).json({
        message:"User not found",
        success:false
      })
    }else{
      res.status(200).json({
        message:"User found",
        success:true,
        data:verifyOtp
      })
    }
  }catch(error){
    res.status(500).json({
      message:error.message,
      success:false
    })
  }
}

const userLogin   =async(req,res)=>{
  try{
    const {email,password}=req.body
    const userLogin=await authService.userLogin(email,password)
    if(!userLogin){
      res.status(500).json({
        message:"User not found",
        success:false
      })
    }else{
      res.status(200).json({
        message:"User found",
        success:true,
        data:userLogin
      })
    }
  }catch(error){
    res.status(500).json({
      message:error.message,
      success:false
    })
  }
}
export default {createUser,sendOtp,verifyOtp,userLogin}

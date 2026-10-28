import authModel from "../../models/auth.model.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
const createUser = async (data) => {
  console.log("Service", data);
  try {
    const { name, email, avatar, password, mobile, role } = data;
    if (!name || !email || !avatar || !password || !mobile || !role)
      throw new Error("All fields are required.");
    const createData = await authModel.create({
      name,
      email,
      avatar,
      password,
      mobile,
      role,
    });
    if (!createData) {
      throw new Error("User not created.");
    } else {
      return createData;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const sendOtp = async (email) => {
  try {
    console.log("email", email);
    const senderEmail = process.env.SENDER_EMAIL;
    const senderPass = process.env.SENDER_PASS;
    const ifUserExist = await authModel.findOne({ email });


    if (!ifUserExist) throw new Error("User not found.");
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPass,
      },
    });
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpSave = await authModel.findOneAndUpdate({email:email}, { otp: otp }, { new: true });
    otpSave.save();
    
    const mailOption = {
      from: senderEmail,
      to: email,
      subject: "For ecommerce",
      text: `Otp is ${otp}`,
    };
    console.log("MAIL OPTION:", mailOption);
    const sendEmail = await transport.sendMail(mailOption);
    if (!sendEmail) throw new Error("Can't send otp");
    else {
      return otp;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const verifyOtp = async (email, otp)=>{
  try{ 
    if(!email || !otp) throw new Error("Email and OTP are required.");

    if(otp.length !== 6) throw new Error("Invalid OTP length please Enter 6 digit OTP");
    const ifExist = await authModel.findOne({email:email});
    if(!ifExist) throw new Error("User not found.");
    const checkOTP = ifExist.otp; 
    if(checkOTP !== Number(otp)) throw new Error("Invalid OTP");
    return {ifExist,checkOTP};

  }catch(err){
    throw new Error(err.message);
  }
}



const userLogin = async (email, password) => {
  try {
    if (!email || !password) throw new Error("Email and password are required.");
    const ifUserExist = await authModel.findOne({ email });
    if (!ifUserExist) throw new Error("User not found.");
    const checkPassword = ifUserExist.password === password;
    if (!checkPassword) throw new Error("Invalid password.");
    const token = jwt.sign({ id: ifUserExist._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    ifUserExist.refreshToken = token;
    await ifUserExist.save();
    return {ifUserExist, token};
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { createUser, sendOtp, verifyOtp, userLogin }; 

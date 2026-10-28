import authModel from "../models/auth.model.js";
const JWT_SECRET = process.env.JWT_SECRET;

import jwt from "jsonwebtoken";
const ifUserLogin = async(req,res,next)=>{
    try{
        const token = req.headers.authorization;
        console.log("token",token) 
        if(token){
            console.log("token check ",token)
            const removeBearer = token.replace("Bearer ", "");
            const decoded = jwt.verify(removeBearer, JWT_SECRET);
            const ifUserExist = await authModel.findById(decoded.id); 
                if(decoded.id !== ifUserExist._id.toString()) throw new Error("Invalid token");
                next();
        }else{
            throw new Error("Token is required");
        }
    }
    catch(err){
        res.status(401).json({
            message:err.message,
            success:false
        })
    }
}


export default ifUserLogin;
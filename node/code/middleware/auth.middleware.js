import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const authMiddleware = async(req, res, next) => {
    try{
        // const token = req.headers.authorization.replace("Bearer ", "")
        const token = req.cookies.auth_token
        // console.log("access token", req)

        if(!token){
            return res.status(401).json({msg: "No token provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY)
        
        const user = await User.findById(decoded.id)

        if(!user){
            return res.status(400).json({msg: "Invalid token."})
        }

        req.user = user

        next()
    }catch(error){
        console.log(error)
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({msg: "Token expired"})
        }
        
        return res.status(500).json({msg: "Something went wrong"})
    }
}
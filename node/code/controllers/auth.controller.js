import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import jwt from "jsonwebtoken"

const SALT_ROUNDS = 10

export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({msg: "Please provide required details."})
        }

        const user = await User.findOne({email: email})

        if(user){
            return res.status(400).json({msg: "User aready exists."})
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        const newUser = await User.create({name, email, password:hashedPassword})

        res.status(200).json({msg: "User created successfully", newUser})
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: "Something went wrong"})
    }
}

export const login = async(req, res) => {
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({msg: "Please provide requied details."})
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({msg: "User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({msg: "Invalid credentials."})
        }

        const accessToken = generateAccessToken({email: user.email, id: user._id})

        const refreshToken = generateRefreshToken({email: user.email, id: user._id})

        res.cookie("auth_token", accessToken, {
            maxAge: 1*60*1000, 
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }).cookie("refresh_token", refreshToken, {
            maxAge: 7*24*60*60*1000,
            httpOnly: true,
            secure: true,
            sameSite: "none"
        })

        return res.status(200).json({msg: "Logged in successfully"})

        // console.log(refreshToken, accessToken)

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong.", error})
    }
}

export const getNewToken = async(req, res) => {
    try {
        const token = req.cookies.refresh_token
        console.log(token)
    
        if(!token){
            return res.status(401).json({msg: "No token provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_REFRESH_KEY)

        const accessToken = generateAccessToken({email: decoded.email, id: decoded._id})

        res.cookie("auth_token", accessToken, {
            maxAge: 15*60*1000,
            httpOnly: true,
            secure: true,
            sameSite: "none"
        })

        res.status(200).json({msg: "token sent successfully"})

    } catch (error) {
        console.log(error)
        return res.status(403).json({msg: "Invalid token"})
        
    }
}
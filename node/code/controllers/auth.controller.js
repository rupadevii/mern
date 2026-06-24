import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { generateAccessToken } from "../utils/generateAccessToken.js";

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

        const accessToken = generateAccessToken({email: user.email, id: user._id, password: user.password})

        res.cookie("auth_token", accessToken, {
            maxAge: 15*60*1000, 
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })


        res.status(200).json({msg: "Logged in successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong.", error})
    }
}
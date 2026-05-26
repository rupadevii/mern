import User from "../models/user.model.js";

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

        const newUser = await User.create({name, email, password})

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

        if(user.password !== password){
            return res.status(400).json({msg: "Invalid credentials."})
        }

        const token = new Date().getTime()

        res.status(200).json({msg: "Logged in successfully", token})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong.", error})
    }
}
import express from "express"
import userRoutes from './routes/users.route.js'
import authRoutes from './routes/auth.route.js'
import dotenv from "dotenv"
import { connectDB } from "./config/mongoose.config.js";

const app = express()
dotenv.config({
    quiet: true
})

connectDB()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/auth', authRoutes)

const PORT = 8000

app.listen(PORT, (req, res) => {
    console.log("Server is running on PORT 8000")
})
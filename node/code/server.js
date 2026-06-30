import express from "express"
import userRoutes from './routes/users.route.js'
import authRoutes from './routes/auth.route.js'
import studentRoutes from './routes/students.route.js'
import orderRoutes from './routes/orders.route.js'
import dotenv from "dotenv"
import { connectDB } from "./config/mongoose.config.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

dotenv.config({
    quiet: true
})

connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: 'http://localhost:5173', credentials: true}))

app.use('/users', authMiddleware, userRoutes)
// app.use('/users', userRoutes)
app.use('/auth', authRoutes)
app.use('/students', studentRoutes)
app.use('/orders', orderRoutes)

const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
    console.log("Server is running on PORT", PORT)
})
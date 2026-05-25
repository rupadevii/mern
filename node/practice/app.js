import express from "express"
import userRoutes from './routes/users.route.js'
const app = express()

app.use(express.json())

app.use('/users', userRoutes)

const PORT = 8000

app.listen(PORT, (req, res) => {
    console.log("Server is running on PORT 8000")
})
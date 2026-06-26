import express from 'express'
import http from 'http'
import {Server} from "socket.io"
import cors from "cors"

const app = express()
app.use(cors())
const httpServer = http.createServer(app)

const io = new Server(httpServer, {
    cors : "*",
    methods : ["GET","POST"]
})

const history = []

io.on('connection', (socket) => {
    console.log(`${socket.id} connected successfully`)

    socket.emit("send_history", history)

    socket.on('message', (data) => {
        console.log(socket.id, data)
        history.push({name: data.name, message: data.message})
        io.emit('message',data)
    })

    socket.on('disconnect', () => {
        console.log("disconnected")
    })
})

httpServer.listen(8000, () => {
    console.log('Server is running on PORT 8000')
})
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})

const PORT = 8000
app.listen(PORT, (req, res) => {
    console.log("Server is running on PORT 8000")
})
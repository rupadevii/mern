const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({
            data: "Hello from nodejs"
        })) 
    }else if(req.url ==="/about" && req.method==="GET"){
        res.writeHead(200, {'Content-Type': "application/json"})
        res.end(JSON.stringify({
            data: "About page"
        }))
    }else{
        res.writeHead(404, {"Content-type": "application/json"})
        res.end(JSON.stringify({
            data: 'Not found'
        }))
    }
})

const PORT = 8000

server.listen(PORT, () => {
    console.log("Server is running on port 8000.")
})
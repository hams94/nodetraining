const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url == '/'){
        res.end("Hello World")
    } else if(req.url == '/bonjour'){
        res.end("<h1>Bonjour le Monde </h1>")
    }
    else{
        res.end("Cette route n'est pas gèré")
    }
    
})

server.listen(3000,'localhost',()=>{
    console.log("server open")
})
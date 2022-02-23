const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('wellcom tho this shit')
    }
    if(req.url==='/about'){
        res.end('this is a new one')
    }
    res.end(`
    <h1> error </h1>
     <p>path doenst exist</p>
    `)
})
server.listen(5000)
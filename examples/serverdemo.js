const http=require('http')

http.createServer((req,res) =>{
    console.log("request:",req);
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end("hello world")
}).listen(3000,'localhost')
//in localhost:3000 "hello world" will be displayed
//console.log(http)
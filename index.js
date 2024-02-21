const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("Hi from the server");
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening  to the server 8000");
})
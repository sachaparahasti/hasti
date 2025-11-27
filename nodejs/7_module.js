const http=require('http');

const security=require('./lib/security');

const server=http.createServer((req,res)=>{
    
    res.writeHead(200,{'content-type':'text/html'});
    let hash=security.getHashPassword('myPassword123');
    let isPasswordMatch=security.comparePassword('myPassword123',hash);
    console.log(isPasswordMatch);
    res.write(hash);
    res.end();
});

const port=5000;
server.listen(port,()=>{
    console.log("port is listening to port 5000....");
});
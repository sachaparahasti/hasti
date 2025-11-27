const http=require('http');
const details=require('./lib/site_detail');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    let output=details.center + '<br/>' + details.address + '<br/>' + details.city + '<br/>' + details.contactno;
    res.write(output);
    res.end();
});

port=5000;
server.listen(port,()=>{
    console.log("server is listen to port 5000....");
});
const http=require('http');
const fs=require('fs');
const { error } = require('console');

const server=http.createServer((req,res)=>{
    let url=req.url;
    let filename='site/404.html';

    if(url=='/'||url=='/home')
    {
        filename='site/home.html';
    }
    else if(url=='/aboutus')
    {
        filename='site/aboutus.html';
    }
    else if(url=='/contactus')
    {
        filename='site/contactus.html';
    }
    else if(url=='/services')
    {
        filename='site/services.html';
    }
    else if(url=='/products')
    {
        filename='site/products.html';
    }
    res.writeHead(200,{'content-type':'text.html'});
  let fileContent= fs.readFileSync(filename);
  res.write(fileContent);
  res.end();
});

const port =5000;
server.listen(port,()=>{
    console.log('this server are listening in port 5000');
});
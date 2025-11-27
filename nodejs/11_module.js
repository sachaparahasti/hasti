const http=require('http');

const data=require('./lib/database1');

function handleReqRes(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    let db  =new data.Dbconnector();
    db.insertDb();
    db.updateDb();
    db.deleteDb();
    db.fetchdata();
    res.write("server are a created");
    res.end();
}

const server=http.createServer((req,res)=>{
   handleReqRes(req,res)
});

const port=5000;
server.listen(port,()=>{
    console.log("port listening on 5000");
});
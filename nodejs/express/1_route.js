const express=require('express');

const add=express();

add.get('/products',(req,res)=>{
    res.send("Get method is called");
});

add.post('/products',(req,res)=>{
    res.send("post method is called");
});

add.put('/products',(req,res)=>{
    res.send("put method is called");
});

add.delete('/products',(req,res)=>{
    res.send("delete method is called");
});


add.listen(5000,()=>{
    console.log("server is listening on port 5000");
});
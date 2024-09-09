 // <-------- http server ----------->
// const http= require("http");
// var server= http.createServer(function(req,res){
//     res.end("server connected wait some time .............")
// })
// server.listen(3000);


//express and postman pratice

const express = require("express");
const app = express();
 var data=[1,2,3,4,5]
app.get("/", function(req,res){
    res.send("hey")
})

app.get('/data',function(req,res){
    res.send("number is assigne to data")
})
app.post("/data/:number",(req,res)=>{
    data.push(parseInt(req.params.number));
    res.send(data);
}) 
app.listen(3000);
const express = require("express");
const app = express();
const path = require("path");
const fs= require("fs")
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res){
    fs.readdir(`./files`, function(err,files){
        res.render("index",{files})
    })
  
     
})
// app.get("/create", function(req,res){
    //const currentDate = new Date();
// 
  // Format day, month, and year
//   const day = String(currentDate.getDate()).padStart(2, '0');
// //   const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//   const year = currentDate.getFullYear();
// 
//   const fn=`${day}-${month}-${year}.txt`;
    // fs.writeFile(`./files/${fn}`,"daal chini",function(err){
        // if(err){
            // return res.send("soome thing went wrong")
        // }else{
            // res.send("done")
        // }
    // })
// })
app.listen(3000);
//<------------- writeFile----------------->
//How we can write file in node js there is a simple demo
// const fs= require("fs");
// fs.writeFile("abcd.txt",function(err){
//     if(err)
//         console.log(err);
//     else{
//         console.log(data)
//     }
// })


//<-----------------Read file------------------>

// const fs= require("fs");
// fs.readFile("abcd.txt","utf-8",function(err,data){
//     if(err)
//         console.log(err);
//     else{
//         console.log(data)
//     }
// })

//<------------------- Append Data ---------------------->
 const fs= require("fs");
 fs.appendFile("abcd.txt", " addd this file inside my file ", function(err){
    if(err){
        console.log(err)
    }else{
        console.log("eveythinng is up too data")
    }
 })
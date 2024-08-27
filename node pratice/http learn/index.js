 // <-------- http server ----------->
const http= require("http");
var server= http.createServer(function(req,res){
    res.end("server connected wait some time .............")
})
server.listen(3000);
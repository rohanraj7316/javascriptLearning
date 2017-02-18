var http = require("http");
http.createServer(function(req,res){
	res.writeHead(200,{'Context-Type':'text/plain'});
	res.end('hellow world');
}).listen(8081);
console.log("server is running");
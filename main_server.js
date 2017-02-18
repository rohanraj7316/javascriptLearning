var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
	var path = url.parse(req.url).pathname;
	console.log("request for "+ path +"recieved");
	fs.readFile(path.substr(1),(err,data)=>{
		if(err){
		console.log(err);
		}else{
		res.writeHead(404,{'Content-Type':'text/html'});
		}else{
		res.writeHEad(200,{'Content-Type':'text/html'});

		}
		res.end();
	});
}).listen(8081);
console.log('server running...');
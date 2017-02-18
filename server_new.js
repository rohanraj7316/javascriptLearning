var http = require('http');
var fs = require('fs');
try{
	var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	fs.readFile('bs2.html',(err,data)=>{
	if(err){
	return console.log(err);
	}
	res.write(data.toString());
});
	
});
server.listen(8081);
console.log("server is listening");
}catch(err){
	console.log("given error is"+err);
}
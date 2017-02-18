var http = require('http');
var options = {
	host:'localhost',
	port:'8081',
	path:'/index.htm'
};
var callback = function(res){
	var body ='';
	res.on('data',(data)=>{
	body+=data;
	});
	res.on('end',()=>{
	console.log(body);
	});
}
var req = http.request(options,callback);
req.end();
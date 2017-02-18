const net = require('net');
var server = net.createServer((socket)=>{
	socket.end('goodbye\n');
}).on('error',(err)=>{
	throw err;
});
server.listen(50302,()=>{
	address = server.address();
	console.log('open server on %j',address);
});
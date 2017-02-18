const dns = require('dns');
dns.lookup('www.w3school.com',function(err,addresses,family){
	console.log('add:',addresses);
	console.log('family',family);
});
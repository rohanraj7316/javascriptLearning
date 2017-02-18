var fs = require('fs');
fs.readFile('bs2.html',(err,data)=>{
	if(err){
	return console.log(err);
	}
	console.log(data.toString());
});
console.log("program ended");
var express = require("express");
var app = express();
app.set('port',process.eve.PORT || 3000);
app.get('/exp',function(req,res){
	res.send('Express Works');
});
app.listen(app.get('port'),function(){
	console.log("express started");
});
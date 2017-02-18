
var express = require("express");
var app = express();
app.get('/',(req,res)=>{
     res.send('hello world');
});
app.listen(3000,function(){
    console.log('example app is listening to the port');
});
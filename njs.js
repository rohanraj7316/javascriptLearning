var fs = require("fs");
var data = fs.readFileSync("demoText.txt");
console.log(data.toString());
console.log("program ended");
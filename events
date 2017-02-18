var ev = require('events');
var emiter = new ev.EventEmitter();

var l1 = ()=>{
	console.log("listener 1 is executed");
}
var l2 = ()=>{
	console.log("listener 2 executed");
}
var l3 = ()=>{
	console.log("listener 3 executed");
}
emiter.addListener('con',l1);
emiter.on("con",l2);
var count = require('events').EventEmitter.listenerCount(emiter,'con');
console.log("con is called " +count);
emiter.emit('con');
emiter.removeListener('con',l1);
console.log("l1 of con will not work");
emiter.emit('con');
console.log('program ended');


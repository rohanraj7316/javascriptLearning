var events = require('events');
var eventEmitter = new events.EventEmitter();
var ringBell1 = function ringBell(){
	console.log('ring first bell');
}
var  ringBell2 = function ringBell2(){
	console.log('ring second bell');
}
eventEmitter.on('doorOpen',ringBell1);
eventEmitter.on('doorClosed',ringBell2);
eventEmitter.on('doorOpen',ringBell2);
eventEmitter.emit('doorOpen');
//eventEmitter.emit('doorClosed');
var EventEmitter = require('events');
var eventEmitter = new EventEmitter();

eventEmitter.on('start', number=>{
    console.log(`started number is : ${number}`);
});

eventEmitter.emit('start', 10);
var EventEmitter = require('events');
var eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=>{
    console.log('started!')
});

eventEmitter.emit('start');
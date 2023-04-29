var ws = require('ws');
var client = new ws('ws://localhost:8000');

client.on('open', ()=>{
    client.send('Hello World!');
});
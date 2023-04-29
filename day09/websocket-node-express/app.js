var express = require('express');
var ws = require('ws');
var app = express();

var wsServer = new ws.Server({noServer: true});
wsServer.on('connection', socket=>{
    socket.on('message', message => console.log(message));
});

var server = app.listen(8000);
server.on('upgrade', (request, socket, head)=>{
    wsServer.handleUpgrade(request, socket, head, socket =>{
        wsServer.emit('connection', socket, request);
    });
});


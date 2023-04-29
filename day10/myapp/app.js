var express = require('express');
var http = require('http');
var ws = require('ws');
var port = 8000;

var app = express();
var server = http.createServer(app);
var wss = new ws.Server({server});

server.listen(port, ()=>{
    console.log('server is running on port '+ port);
})

wss.on('connection', ws=>{
    console.log('new connection');
    ws.on('message', (data)=>{
        console.log('New message received: '+ data);
    })
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.post('/hello', function(req, res){
    res.send('you jsut called the post method at hello');
})

app.all('/test', function(req, res){
    res.send('http method does not ahve any effect ont his router');
})

app.listen(8000);
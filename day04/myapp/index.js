var express = require('express');
var app = express();
var port = 8000;

app.use(function(req, res, next){
    console.log('A new call request received at ' + Date.now());
    //function route handler.
    next();
});

app.use('/things', function(req, res, next){
    console.log('A new call testing request received at ' + Date.now());
    //function route handler.
    next();
});

app.get('/things', function(req, res, next){
    res.send('Things received');
})

app.listen(port, ()=>{
    console.log('listening on port ' + port);
})
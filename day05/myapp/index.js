var express = require('express');
var app = express();
var port = 8000;

app.use((req, res, next)=>{
    console.log("start");
});

app.get('/', (req, res, next)=>{
    res.send('middleware');
});

app.use('/', (req, res, next)=>{
    console.log('end');
});





app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})


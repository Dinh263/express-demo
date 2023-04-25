var express = require('express');
var app = express();
var port = 8000;

app.get('/:id', (req, res)=>{
    res.send(`the id you sepcified is: ${req.params.id}`);
});

app.get('/things/:name/:id', (req, res)=>{
    var name = req.params.name;
    var id = req.params.id;
    res.send(`id: ${id} and name: ${name}`);
});

app.get('*', (req, res)=>{
    res.send('Sorry, this is invalid url')
});

app.get('/things/:id([0-9]{5})', (req, res)=>{
    var id = req.params.id;
    res.send(`id: ${id}`);
});

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})
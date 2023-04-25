var express = require('express')
var app = express();
var port = 8000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.use((req, res, next)=>{
    console.log('new request is calling at ' + Date.now());
    next();
})

app.get('/', (req, res)=>{
    res.render('./default', {
        greeting: 'Hello from testing side'
    });
});

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
});
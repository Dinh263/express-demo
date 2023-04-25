var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = 8000;
var multer = require('multer');
var upload = multer();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(upload.array());
app.use(express.static('public'));


app.post('/',(req, res)=>{
    console.log(req.body);
    res.send("received your request");
});


app.get('/', (req, res) => {
    res.render('form');
});





app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
});
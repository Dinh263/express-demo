var express = require('express');
var app = express();
var port = 8000;

app.set('view engine', 'pug');    // set the default view engine
app.set('views', './views');      // set folder path


app.get('/firsttemplate', (req, res)=>{
    res.render('first_view');
})

app.get('/dynamicview', (req, res)=>{
    res.render('dynamic', {
        name: 'Testing',
        url: 'http://localhost:8000'
    });
});

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})


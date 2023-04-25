var express = require('express');
var app = express();

var thing = require('./thing');

app.use('/thing', thing);

app.listen(8000);


var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Get route on things like');
})

router.post('/hello', function(req, res){
    res.send('post on request');
})

module.exports = router;
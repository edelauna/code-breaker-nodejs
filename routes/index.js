var express = require('express');
var router = express.Router();

const {body, validationResult} = require('express-validator/check');


//Displays index//
router.get('/', function(req, res, next){
    res.sendfile('public/code_breaker.html');
});


module.exports = router;
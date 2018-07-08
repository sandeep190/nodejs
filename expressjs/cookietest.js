var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var cookies = require('browser-cookies');

app.get('/', function(req, res){
    cookies.set('firstName', 'Lisa'); 
    res.send(cookies.get('firstName'));  
});

app.listen(3000);
var cookieSession = require('cookie-session')
var cookieParser = require('cookie-parser')
var express = require('express')

var app = express()

app.use(cookieSession({
  name: 'session',
  keys: ["abc"],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(cookieParser())

// var express = require('express');
// var app = express();
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());
// var cookies = require('browser-cookies');

app.get('/', function(req, res){
    // cookies.set('firstName', 'Lisa'); 
    // res.send(cookies.get('firstName'));
    cookies.set('firstName', 'Lisa'); 
    
    console.log('Cookies: ', req.cookies)
    res.send("Hi")  
});

app.listen(3000);
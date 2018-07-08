var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "sandeepji",resave: true,saveUninitialized: true}));
var pretty = require('express-prettify');
 
app.use(pretty({ query: 'pretty' }));
app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      response = "You visited this page " + req.session.page_views + " times";
      req.session.userId=2;
      req.session.username = 'sandeep maurya';
      res.json(req.session);
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000);

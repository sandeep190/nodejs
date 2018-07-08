var express = require('express');
var bodyParser = require('body-parser');
//require('./app/config')
var func = require('./app/function')

const port = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
var mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejs"
  });
  
  con.connect(function(err) {
    if (err) throw err;
  });
app.post('/signup', function(req, res){
    console.log(req.body);
    msg = signup(req,con)
    res.send(msg);
 }); 

 app.all('/test/:id',function(req, res){
      console.log(req.params);
      res.send("get url parameter : "+req.params.id)
 });

 app.all('*',function(request,response){
   response.send("Not Found")
 })

 app.listen(port,function(){
    console.log("server start smongo on "+port);
})


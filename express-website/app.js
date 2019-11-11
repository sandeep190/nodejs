var express = require('express')
var bodyParser = require('body-parser');
var path = require('path')

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false} ));

app.get('/', function(req,res){

    res.send('Hello world friends');
});


app.listen(3000);

console.log('server is run is port 3000');
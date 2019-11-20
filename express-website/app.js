var express = require('express')
var bodyParser = require('body-parser');
var path = require('path')

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false} ));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','jade');
app.set('views',path.join(__dirname,'views'));
app.get('/', function(req,res){
    data = {"title":"welcome","name":"Sandeep maurya"};
    res.render('index',data);
    //res.send('Hello world friends');
});

app.get('/about', function(req,res){
    data = {"title":"welcome","name":"About Us"};
    res.render('about',data);
    //res.send('Hello world friends');
});

app.listen(3000);

console.log('server is run is port 3000');
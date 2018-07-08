var express = require('express');
var bodyParser = require('body-parser');
const port = 3000;
var app = express(); 
var path = require('path')

var index = require('./routes/index')
var tasks = require('./routes/task')

app.set('views',path.join(__dirname,'views'));
app.set('view_engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')))
app.set('view options', {
     locals: { scripts: ['jquery.js'] } 
     
    });  
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',index)
app.use('/api',tasks);
app.listen(port,function(){
    console.log("server start smongo on "+port);
})
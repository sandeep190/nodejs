var express = require('express')
var mongojs = require('mongojs')
var router = express.Router();
var person = []
var person = [{
    id:1,
    name:"sandeep",
    age:20
},{
    id:2,
    name:"rajiv",
    age:40
},{
    id:3,
    name:"vivek",
    age:30
}]
router.get('/', function(req,res){
   
    res.render('index.html',{"person":person})
})
router.post('/userdata', function(req,res){
    person.push(req.body)
    console.log(req.body)
    res.render('index.html',{"person":person})
    
})

module.exports = router;
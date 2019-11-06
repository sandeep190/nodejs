var mongojs = require('mongojs');
var db = mongojs('mongodb://sandeep:sandeep123@127.0.0.1:27017/country',[]);
var express = require('express');
console.log('come here');
var app = express();
const port = 3000;


module.exports= {
    "db":db,
    "express":express,
    "app":app,
    "port":port,
} ;
var express = require('express')
var mongojs = require('mongojs')
//var db = mongojs('mongodb://sandeep:sandeep123@ds161710.mlab.com:61710/sandeep_tasks',['task'])
var db = mongojs('mongodb://sandeep:sandeep123@127.0.0.1:27017/country',[]) //127.0.0.1:27017
var router = express.Router();
let response;
router.get('/tasks', function(req,res){
    db.students.aggregate([
        {$unwind:"$scores"},
        {$match: {"scores.score": {"$gt":75},
                  "scores.type":"homework"}
                 },
        { $match : {"scores.score": {$lt:80}}}
    ],function(err,data){
        if(err) res.send(err);
       response = data 
      // console.log(response)
    });
   
    res.send(response)
})
 

router.all('*', function(req,res){
    res.send('Not Found')
})
module.exports = router;
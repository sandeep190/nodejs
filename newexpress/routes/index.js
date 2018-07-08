var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var DB = mongojs('mongodb://sandeep:sandeep123@127.0.0.1:29017/country',[])
/* GET home page. */
router.get('/', function(req, res, next) {
  DB.students.aggregate([
   // {$unwind:"$scores"}, 
    {$match: {"scores.score": {"$gt":75},
              } //"scores.type":"homework"
             },
    { $match : {"scores.score": {$lt:80}}}
],function(err,data){
    if(err) res.send(err);
   // console.log(data);
    res.render('index', { StudentsData: data });
  // console.log(response)
});

  
});

module.exports = router;

var express = require('express');
var router = express.Router();
var url = "mongodb://localhost:27017/";


/* GET users listing. */
router.get('/', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient;
// Connect to the db
    MongoClient.connect(url,{useUnifiedTopology: true}, function(err, db) {
      if(err) { return console.dir(err); }
      var selDB = db.db("sandeep");
      //var collection = selDB.createCollection('test');
      var myobj = { name: "Company Inc", address: "Highway 37" };
     /* selDB.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //db.close();
      });*/
      selDB.collection("customers").find({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
       // res.json(result);
        //db.close();
      });
    });
  res.send('respond with a resource');
});

module.exports = router;

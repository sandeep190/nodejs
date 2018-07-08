const config =require('./config')
const db = config.db;
const express = config.express;
const app = config.app;
const port = config.port;
var router = express.Router();
let response;
app.get('/', function(req,res){
    db.students.aggregate([
        {$unwind:"$scores"},
        {$match: {"scores.score": {"$gt":75},
                  "scores.type":"homework"}
                 },
        { $match : {"scores.score": {$lt:80}}}
    ],function(err,data){
        if(err) res.send(err);
        var tbldata = '<table border="1"><th>S.No.</th><th>Name</th><th>Score</th><th>type</th>'
        data.forEach(function(item) {
            //console.log(item)
            tbldata += '<tr><td>'+item._id+'</td><td>'+item.name+'</td><td>'+item.scores.score+'</td><td>'+item.scores.type+'</td></tr>'
             
        }); 
            tbldata +='</table>'
            res.send(tbldata)
       response = data 
      // console.log(response)
    });
   
    
})

app.listen(port,function(){
    console.log("server start smongo on "+port);
})


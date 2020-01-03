var conn = require('./con');
con = conn.connection;
var data;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  data = getresult();
  
  console.log("outer data set===>");
  console.log(data);
});

function getresult(){
  var sql = "select * from users";
  con.query(sql,function(err,result){
      if(err) throw err;
      console.log(result);
      return result;
  });
}

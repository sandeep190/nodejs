var mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "nodejs"
  });
  
  con.connect(function(err) {
    if (err) throw err;
  });
#!/usr/bin/env nodejs
var http = require('http');
var user = {
     first_name: "HTML",
     last_name: "CSS",
     age: 32,
     website: "java2s.com"
};

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n'+user);
}).listen(2222, 'localhost');
console.log('Server running at http://localhost:8080/');
console.log('End thetesting');

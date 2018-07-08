var net = require('net');
var server = net.createServer(function(conn) { 
   console.log('client connected');
   
   conn.on('end', function() {
      console.log('client disconnected');
   });
   conn.on('data', function(data) {
    //conn.write(data);
    data = data.toString();//.split(" ");
    var num = parseInt(data[1], 10);
    switch (data[0]){
      case 'S':
       // conn.write('getting number is '+num);
        //conn.write(Math.sqrt(num).toString());
    }
  });

  conn.write('What would you like to do?\n');
  conn.write('(S) - Square root <arg>\n');
  conn.pipe(conn);
});
server.listen(8180, function() { 
   console.log('server is listening');
});
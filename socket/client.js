var net = require('net');
var client = net.connect({port: 8180}, function() {
   console.log('connected to server!');  
});
num=1;
client.on('data', function(data) {
    if (num == 1) {
        console.log(data.toString());
    
        process.stdin.resume();
        process.stdin.once('data', function(input) {
          client.write(input);
        });
    
        num++;
      } else {
        console.log("Server returned: " + data.toString() + "\n");
        process.exit();
      }
});
client.on('end', function() { 
   console.log('disconnected from server');
});
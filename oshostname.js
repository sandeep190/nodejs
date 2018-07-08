

const os = require('os');
// console.log(os.homedir());
// console.log(os.hostname());
// //console.log(os.uptime())
// console.log(os.EOL)

// taking command line arguments
var process = require('process');
for(i=0;i<process.argv.length; i++){
    console.log(process.argv[i]+os.EOL);
    //console.log(os.EOL)
}
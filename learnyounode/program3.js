const fs = require('fs');
const process =  require('process')
filepTH = process.argv[2]
var content = fs.readFileSync(filepTH);
tt = content.toString().split('\n');
console.log(tt.length-1)
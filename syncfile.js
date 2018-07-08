const fs = require('fs');
var process = require('process');

var inputfile = process.argv[2];

console.log(inputfile);
fs.watchFile(inputfile,(curr,prev)=>{
    console.log("file changed");
    content = fs.readFileSync(inputfile,'utf-8')
    console.log(content);
})

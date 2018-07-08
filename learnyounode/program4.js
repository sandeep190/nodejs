const fs = require('fs')
const process = require('process')

fs.readFile(process.argv[2],function(err,data){
    lines = data.toString().split('\n').length-1;
    console.log(lines)

})
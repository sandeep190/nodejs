const process = require("process")
var sum = 0;
//console.log(process.argv)
for(i=2;i<process.argv.length;i++){
    //console.log(process.argv[i]);
    sum += Number(process.argv[i])
}
console.log(sum)

const calres = require("./areacal");
const process = require('process');
//console.log(process.argv) 
var firstInteger = process.argv[2];
var secint = process.argv[3]
if(firstInteger>0 && secint>0){
tringlearea = calres.arcal(firstInteger,secint,'tringle')
console.log("Area of triangle is "+tringlearea)
} else {
    console.log("enter the correct input")
}
const process = require('process');
const fs = require('fs');
var inputfile = process.argv[2];
var finaldata='';
fs.readFile(inputfile,'utf8',(error,data) =>{
    //console.log(data)
    
    if(data == undefined || data.length == 0){
        console.log("File is either empty or not present");
        return -1
    }
    //console.log('length of the file is '+length);
    var arr = data.split(". ");
    arr.forEach((linecontent, index) => {
        finaldata += linecontent + '\n';
      });
      //console.log(finaldata);

    var finaldata = data.replace(/\. /g, "\n");
    console.log(finaldata)
    var re = new RegExp("/. /","gi");

});

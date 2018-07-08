const process = require('process');
const fs = require('fs');

var inputfile = process.argv[2];
//if (fs.existsSync(inputfile)) {
    
//console.log(process.argv);
var finaldata='';
fs.readFile(inputfile,'utf8',(error,data) =>{
    console.log(data)
    var i=0
    if(data == undefined || data.length == 0){
        console.log("File is either empty or not present");
        return -1
    }
    //console.log('length of the file is '+length);
    var obj = [];
    for(i=0;i<data.length;i++){
       
        if(data[i].toUpperCase()===data[i]){
            finaldata += data[i].toLowerCase();
        } else {
            finaldata += data[i].toUpperCase();            
        }
        //console.log(data[i])
        
        if (data[i] == "(") {
         var re = new RegExp("\\(","gi");
        }
        else {
        var re = new RegExp(data[i],"gi");
        }
        var num_matches = data.match(re).length;
        obj[data[i]]=num_matches;
    
    }
    
    console.log(finaldata);

    //console.log("number of charector count "+obj)
    //console.log(obj)
    //finaldata = finaldata.replace(/of/g, "loooo");
    //var res = new RegExp("loooo","gi");
    //var ss = finaldata.match(res);
    //console.log(ss)
    fs.writeFileSync('output.txt',finaldata,'utf8');
    
    return finaldata;
//}  else {
//    console.log("file should be empty so please enter valid file")
//}
});
//} else {
//    console.log("file does not exist")
//}
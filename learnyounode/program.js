const fs = require('fs');
const process = require('process')
const testFolder = process.argv[2];
const txt = process.argv[3];

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      arr = file.split('.');
      if(arr[1]==txt){
        console.log(file);   
      }
    });
  })
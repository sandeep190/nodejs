const os = require('os');
const fs = require('fs');
var finalData = '';
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy  Learning!',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
      finalData = data.toString();
      console.log(finalData);
      
    });
});

console.log(__dirname)
console.log(__filename)
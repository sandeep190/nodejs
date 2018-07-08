const os = require('os');

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('message.txt')
  });
  var finalStrings='';
  lineReader.on('line', function (line) {
    console.log('Line from file:', line);
    
    if (line==='data to append'){
        line = 'changed the data \n'
    }
    finalStrings = line.concat(finalStrings);
   
  });
  console.log('final string is'+finalStrings)
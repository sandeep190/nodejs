const fs = require('fs');
const os = require('os');
//contents = fs.readFileSync('hello.js','utf8');
//console.log(contents);

//maps set,strings, fat aarow function, variable, let

try {
    fs.appendFileSync('message.txt', 'data to append'+os.EOL);
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }

contents = fs.readFileSync('message.txt','utf8');
console.log(contents);
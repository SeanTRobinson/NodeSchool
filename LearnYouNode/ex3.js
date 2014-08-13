var fs = require('fs');
var filePath = process.argv[2];
var contents = fs.readFileSync(filePath);
var contentArray = contents.toString().split('\n');

var lineCount = contentArray.length - 1;

console.log(lineCount);

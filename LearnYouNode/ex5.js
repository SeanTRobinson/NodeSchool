var fs = require('fs');
var path = require('path');
var ext = "." + process.argv[3];
fs.readdir(process.argv[2], function(err, files) {
   for(var i=0; i<files.length; i++) {
       if(path.extname(files[i]) === ext) {
           console.log(files[i]);
       }
   };
});

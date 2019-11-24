var fs = require("fs");

/*
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
*/

/*
// Asynchronous - Opening File
console.log("Asynchronous file open");
fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log('File opened successfully');
});
*/

/*
//file status check 
fs.stat('input.txt', function(err, stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");
   
    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());  
});
*/

/*
//file write
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
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
   });
});
*/

//file open, write, read & close
var buff = new Buffer.alloc(1024);
console.log('going to read a file');
fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }

    console.log('file opened successfully');
    fs.read(fd, buff, 0, buff.length, 0, function(err, numBytes){
        if(err){
            return console.error(err);
        }

        console.log('file read successful: ' + numBytes + ' bytes');
        if(numBytes > 0){
            console.log(buff.slice(0, numBytes).toString());
        }
    });

    fs.close(fd, function(err){
        if(err){
            return console.error(err);
        }
        console.log('file closed properly');
    });
});

console.log('program ended');

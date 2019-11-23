
//blocking code example 
/*
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("program ended");
*/

//non-blocking code example 
var fs = require("fs");

console.log("program start");
fs.readFile('input.txt', function (err, data) {
    if(err) 
        console.error(err);
    else 
        console.log(data.toString());
});
console.log("program ended");

/*
Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −
Readable − Stream which is used for read operation.
Writable − Stream which is used for write operation.
Duplex − Stream which can be used for both read and write operation.
Transform − A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −
data − This event is fired when there is data is available to read.
end − This event is fired when there is no more data to read
error − This event is fired when there is any error receiving or writing data.
finish − This event is fired when all the data has been flushed to underlying system.
*/

var fs = require('fs');

//reader stream 
var data = '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk)
{
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('program ended');


/*
//writer stream 
var data = 'node write stream example'
var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function()
{
    console.log('write successfull');
});

writerStream.on('error', function(err){
    console.log(err.stack);
})

console.log('program ended');
*/

/*
//piping the stream 
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);

readerStream.on('end', function(){
    console.log('read ended');
});

writerStream.on('finish', function()
{
    console.log('write successfull');
    console.log('output file content: ');
    fs.readFile('output.txt', function (err, data) {
        if(err) 
            console.error(err);
        else 
            console.log(data.toString());
    });
});

console.log('program ended');
*/

/*
//chaining the stream
var zlib = require('zlib'); 

//compress
// var readerStream = fs.createReadStream('input.txt');
// var writerStream = fs.createWriteStream('input.txt.gz');
// readerStream.pipe(zlib.createGzip()).pipe(writerStream);
// console.log('file compressed');

//decompress
var readerStream = fs.createReadStream('input.txt.gz');
var writerStream = fs.createWriteStream('input2.txt');
readerStream.pipe(zlib.createGunzip()).pipe(writerStream);
console.log('file decompressed');
*/
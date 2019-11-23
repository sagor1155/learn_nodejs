
var http = require("http");

function handle_request(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('My first nodejs server. Ideas are bullet proof.\n');
}

// http.createServer(function (request, response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Hello World. Go fuck yourself\n');
// }).listen(8081);

http.createServer(handle_request).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

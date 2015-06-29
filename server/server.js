/*
Create a simple http server using node. *
This server should respond to a root-url request with a file called
index.html. Do not use ExpressJS. Your code should have error checking
and at least one callback. Put five or more html elements in your
index.html. One of the elements should be a link to an external page.
Things to research: node.js, callbacks, the fs module, the http module.
*/

// Create a web server
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;
var server = http.createServer();


server.listen(port);
console.log('Server running on port ' + port);

server.on('request', requestHandler);

function requestHandler(request, response) {
  var statusCode = 200;
  if (request.url === '/' || request.url === '/index.html') {
    fs.readFile('./index.html', function(error, data) {
      writeResponse(request, response, statusCode, data);
    });
  } else {
    statusCode = 404;
    fs.readFile('./404.html', function(error, data) {
      writeResponse(request, response, statusCode, data);
    });
  }
}

function writeResponse(request, response, statusCode, file) {
  response.writeHead(statusCode, {'Content-Type': 'text/html'});
  response.write(file);
  response.end();
}

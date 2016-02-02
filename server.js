var http = require('http');

var listener = function(request, response){
    response.writeHead(200);
    response.end("Hello World");
};
  
var server = http.createServer(listener);
  
server.listen(process.env.PORT, process.env.IP);
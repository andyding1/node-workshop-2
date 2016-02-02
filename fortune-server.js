var fortune = require('./library/fortune.js');
var http = require('http');

var listener = function(request, response){
    response.writeHead(200);
    response.end(fortune.getFortune());
};
  
var server = http.createServer(listener);
  
server.listen(process.env.PORT, process.env.IP); 
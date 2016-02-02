var fortune = require('./library/fortune.js');
var http = require('http');

var listener = function(request, response){
    return response.end(fortune.getFortune());

};
  
var server = http.createServer(listener);
  
server.listen(process.env.PORT, process.env.IP); 
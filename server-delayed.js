var http = require('http');

var listener = function(request, response){
    setTimeout(function(){
        return response.end("Hello World");
    }, 10000);
};
  
var server = http.createServer(listener);
  
server.listen(process.env.PORT, process.env.IP); 
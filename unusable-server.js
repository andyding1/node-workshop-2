var http = require('http');

var listener = function(request, response){
    var start = new Date().getTime();
    while (new Date().getTime() - start < 10000);
    // INSERT YOUR res.writeHead / res.end lines after this line
    response.writeHead(200);
    response.end("Hello World");
};
  
var server = http.createServer(listener);
  
server.listen(process.env.PORT, process.env.IP); 
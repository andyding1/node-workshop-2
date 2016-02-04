var http = require('http');
var request = require('request');

var requestListener = function (req, response) {

    var word = req.url.substring(2).toLowerCase();
    var apiKey = "d65a90989cdcfeb9cb1fd89efac615f3";

    request('http://words.bighugelabs.com/api/2/' + apiKey + '/' + word + '/json', function(err, res, body) {
        if(!err){
            if(body){
                var data = JSON.parse(body);
                response.writeHead(200);
                response.end(data);
            }
            else{
                response.end("No synonyms for this word");
            }
        }
        else{
            response.writeHead(200);
            response.end("An Error has occurred");
        }
    });
    
};
  
var server = http.createServer(requestListener);
    
server.listen(process.env.PORT, process.env.IP); 
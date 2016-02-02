var apiKey = '&key=AIzaSyAoXm4ftNq4Pg8cbX0LXfZAVaItw6vRuNk';

var http = require('http');
var request = require('request');

var requestListener = function (req, response) {

    var userCity = req.url.substring(1);
    
    request('https://maps.googleapis.com/maps/api/geocode/json?address='+userCity+apiKey, function(err, res, body) {
        if(!err){
            var data = JSON.parse(body);
            var firstResult = data.results[0];
            if(firstResult){
                var location = data.results[0].geometry.location
                response.end("The latitude is "+location.lat+" and the longitude is "+location.lng+".");
            }
            else{
                response.end("Sorry there are no results");
            }
        }
        else{
            response.end("An Error has occurred");
        }
    });
};
  
var server = http.createServer(requestListener);
    
server.listen(process.env.PORT, process.env.IP); 
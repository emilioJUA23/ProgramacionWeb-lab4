var http = require('http');
url = require('url');

function onRequest(request, response)
{
    console.log("User just said hi from: " + request.url);
    var parts = url.parse(request.url, true);
    var query = parts.query;
    console.log(parts);
    response.writeHead(200,{"Context-type":"text/plain"});
    response.write("Hi there "+parts.path.substring(1, parts.path.lenght)+" we are glad to have you here");
    response.end()

}

http.createServer(onRequest).listen(4500);
console.log("Server is now running");
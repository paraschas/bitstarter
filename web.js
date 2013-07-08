var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // return the file contents as a string
  //response.send(fs.readFileSync('./index.html', 'utf8'));
  // return the file contents as a buffer, convert it to a string
  response.send(fs.readFileSync('./index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

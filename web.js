var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // return the file contents as a string
  // http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options
  //response.send(fs.readFileSync('./index.html', 'utf8'));
  // return the file contents as a buffer, convert it to a string
  // http://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end
  // http://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers
  response.send(fs.readFileSync('./index.html').toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

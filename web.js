var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var buffer = new Buffer(30);
  var data = fs.readFileSync('index.html');
  buffer.write("1234");
  response.send(buffer.tostring());


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var app = express();
var dgram = require('dgram');

app.get('/', function (req, res) {
    var isResNotSent = true;
    var message = new Buffer('Some bytes');
    var client = dgram.createSocket('udp4');
    var timeoutHandler = setTimeout(function () {
        client.close();
    }, 100);

    var closeClient = function (err) {
        clearTimeout(timeoutHandler);
        if (isResNotSent) {
            isResNotSent = false;
            client.close();
            res.send(err || 'success');
        }
    };
    client.send(message, 0, message.length, 41234, '127.0.0.1', closeClient);
    client.once('error', closeClient);
    client.once('message', closeClient);
});

var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
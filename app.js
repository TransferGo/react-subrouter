var http    = require('http');
var express = require('express');
var morgan  = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'public' });
});

var server = http.createServer(app);

server.listen(3000);
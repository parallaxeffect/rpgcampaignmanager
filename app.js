var express = require('express');
var app = express();

port = process.env.listen;

app.use('/', express.static('/vagrant/www'));

app.listen(port, function(){
	console.log("Listening on ", port);
});
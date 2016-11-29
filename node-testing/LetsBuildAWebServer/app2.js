var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	var obj = {
		firstName: 'John',
		lastName: 'Doe'
	};

	res.writeHead(200, {'Content-Type': 'application/json'});
	// fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
	res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');

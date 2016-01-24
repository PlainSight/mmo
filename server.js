console.log("Server started");
var Msg = '';
var WebSocketServer = require('ws').Server;
var escape = require('escape-html');
var fs = require('fs');
var  wss = new WebSocketServer({port: 8010});

var connections = [];

function broadcast(message) {
	for(var i = 0; i < connections.length; i++) {
		connections[i].send(message);
	}
}

wss.on('connection', function(ws) {
	console.log('new connection');
	connections.push(ws);
        ws.on('message', function(message) {
        	console.log('Received from client: %s', message);
        	if(message === 'ping') {
			ws.send('pong:' + connections.length);
		} else {
			fs.appendFile('/root/industries/potato.txt', message);
			fs.readFile('/root/industries/potato.txt', function(err, data) {
				fs.writeFile('/root/industries/potato.html', '<html><body>' + data + '</body></html>');
			});
			broadcast(escape(message));
		}
	});
	ws.on('close', function() {
		var index = connections.indexOf(ws);
		console.log('a client disconnected');
		connections.splice(index, 1);
	});
});

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
/*utilizando middleware*/
app.use(express.static('client'));

/*utilizamos express*/
app.get('/hola-mundo', function(req, res){
	res.status(200).send('hola mundo desde una puta')
});

io.on('connection', function(socket){
	console.log("El nodo con IP: "+socket.handshake.address+"se ha conectado...");
});

server.listen(6677, function(){
	console.log('Servidor esta funcionando en http://localhost:6677');
});


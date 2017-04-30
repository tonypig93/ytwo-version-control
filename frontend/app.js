var express = require('express');
var app = express();
var http = require('http').Server(app);
// app.get('*', function (req, res) {
//     res.redirect('/');
// })
app.get('/', function(req, res){
	res.sendFile( __dirname + "/src/index.html" );
});
app.use(express.static('src'));
//app.post('/login')

http.listen(3000, function(){
	console.log('listening on *:3000');
});
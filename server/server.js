var Deepstream = require( 'deepstream.io' );
var http = require( 'http' );
var express = require( 'express' );
var deepstream = new Deepstream();

var app = express();
var server = http.createServer(app);

app.get('/hello', function ( req, res ) {
  res.send( 'Hello to you too!' );
})

deepstream.set( 'urlPath', '/deepstream' );
deepstream.set( 'httpServer', server );
deepstream.start();

server.listen( 6020, function(){
	console.log( 'HTTP server listening on 6020' );
});
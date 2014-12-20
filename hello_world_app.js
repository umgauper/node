/**
 * Created by una on 12/20/14.
 */
var connect = require('connect');

// import middlewares
var helloWorld = require('./hello_world');

var app = connect.createServer(helloWorld);
app.listen(8080);

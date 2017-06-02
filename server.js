// load http module from node js library
// and assign its object and method to
// http variable (variable name not required to be same as module name)
var http = require('http');

function onRequest(request, response) {
	// message will print two times if browser will request
	// for favicon too
	console.log('Request Received');

	// writes header to send to browser
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// send text
	response.write('Hello World');

	// finish the response
	response.end();
}

// start server and call callback function
// onRequest, passing request and response object
http.createServer(onRequest).listen(8888);

// output message immediately on starting the file
// execution
console.log('Server has started');
// load http module from node js library
// and assign its object and method to
// http variable (variable name not required to be same as module name)
var http = require('http');

// load url module
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		// message will print two times if browser will request
		// for favicon too
		console.log('Request for ' + pathname + ' Received');

		route(handle, pathname, response);
	}

	// start server and call callback function
	// onRequest, passing request and response object
	http.createServer(onRequest).listen(8888);

	// output message immediately on starting the file
	// execution
	console.log('Server has started');
}

exports.start = start;
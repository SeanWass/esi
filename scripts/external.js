var server = require('pushstate-server');
var dns = require('dns');
var os = require('os');

const port = '9000';


function runServer() {

	//Find the IP address.
	dns.lookup(
		os.hostname(), 
		(err, add, fam) => {
			var host = add;
			//start server. 
			server.start({
				port: port,
			  	host: host,
			  	directories: ['./build']
			},
			function(err) {
				if (err) {
					console.log(err)
				}
				else {
					console.log("Server running. Navigate to http://" + host + ":" + port + " in your browser");
				}
			})
		}
	)
}

runServer();

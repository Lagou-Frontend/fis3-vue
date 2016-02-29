'use strict';

var cluster = require('cluster');
var express = require('express');
var https = require('https');

// if (cluster.isMaster) {
if (false) {
	var numWorkers = require('os').cpus().length;

	console.log('Master cluster setting up ' + numWorkers + ' workers...');

	for (var i = 0; i < numWorkers; i++) {
		cluster.fork();
	}

	cluster.on('online', function(worker) {
		console.log('Worker ' + worker.process.pid + ' is online');
	});

	cluster.on('exit', function(worker, code, signal) {
		console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
		console.log('Starting a new worker');
		cluster.fork(); // worker进程挂了，重启worker进程
	});
} else {

	var app = express();

	module.exports = app;

	process.on('uncaughtException', function(err) {
		(app.get('logger') || console).error('Uncaught exception:\n', err.stack);
	});

	require('./env/express')(app);

	if (require.main === module) {
		// https.createServer(require('./env/ssl'), app).listen(app.get('port'), function() {
		// 	console.log('[%s] Express server listening on port %d',
		// 		app.get('env').toUpperCase(), app.get('port'));
		// });
		app.listen(app.get('port'), function() {
			console.log('[%s] Express server listening on port %d',
				app.get('env').toUpperCase(), app.get('port'));
		});
	}

}

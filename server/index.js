'use strict';

const express = require('express');
const app = express();

module.exports = app;

process.on('uncaughtException', function(err) {
	(app.get('logger') || console).error('Uncaught exception:\n', err.stack);
});

require('./env/express')(app);
require('./env/routes')(app);

if (require.main === module) {
	app.listen(app.get('port'), function() {
		console.log('[%s] Express server listening on port %d',
			app.get('env').toUpperCase(), app.get('port'));
	});
}

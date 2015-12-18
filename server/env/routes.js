'use strict';

const fs = require('fs');

module.exports = function(app) {
	var files = fs.readdirSync(__dirname + '/../routes/');
	files.forEach(function(file) {
		require('../routes/' + file)(app);
	});
};

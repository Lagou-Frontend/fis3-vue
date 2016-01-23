'use strict';

const fs = require('fs');
const path = require('path');

function walk(rootdir, app, subdir) {
	var abspath = subdir ? path.join(rootdir, subdir) : rootdir;
	fs.readdirSync(abspath).forEach(function(filename) {
		var filepath = path.join(abspath, filename);
		var relativePath = path.join(subdir || '', filename || '');
		if (fs.statSync(filepath).isDirectory()) {
			walk(rootdir, app, relativePath);
		} else {
			require('../routes/' + relativePath)(app);
		}
	});
}

module.exports = function(app) {
	walk(__dirname + '/../routes/', app);
};

'use strict';

const logger = require('tracer').colorConsole();

/**
 *  Show profile
 */

exports.show = function(req, res) {
	logger.info('hahaha in user show');
	res.send('show user, id = ' + req.params.id);
};

exports.delete = function(req, res) {
	logger.info('delete');
	res.send('delete user');
};

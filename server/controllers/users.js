'use strict';

const logger = require('tracer').colorConsole();

/**
 *  Show profile
 */

exports.show = function(req, res) {
	logger.info('hahaha in user show');
	// res.send('show user, id = ' + req.params.id);
	res.json([
		{author: 'ghlin', id: '123', text: 'comment1'},
		{author: 'ghlin1', id: '124', text: 'comment2'}
	]);
};

exports.delete = function(req, res) {
	logger.info('delete');
	res.send('delete user');
};

exports.list = function(req, res) {
	logger.info('list');
	res.json([
		{author: 'ghlin', id: '123', text: 'comment1'},
		{author: 'ghlin1', id: '124', text: 'comment2'}
	]);
};

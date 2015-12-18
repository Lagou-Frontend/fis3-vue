'use strict';

/**
 *  Show profile
 */

exports.show = function(req, res) {
	console.log('in user show');
	res.send('show user, id = ' + req.params.id);
};

exports.delete = function(req, res) {
	console.log('delete');
	res.send('delete user');
};

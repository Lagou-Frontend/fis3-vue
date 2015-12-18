'use strict';

var express = require('express'),
	router = express.Router();

// router.get(['/', '/*'], function(req, res, next) {
// 	if (!(req.url.indexOf('/public') === 0) &&
// 		!(req.url.indexOf('/api') === 0) &&
// 		!(req.url.indexOf('/static') === 0)) {
// 		console.log(req.url + ' in router');
// 		res.render(router.options.index, {
// 			csrfToken: res.locals._csrf
// 		});
// 		return;
// 	}
// 	console.log(req.url + ' not in router');
// 	next();
// });

module.exports = function(options) {
	router.options = options || {};
	return router;
};

'use strict';

var express = require('express'),
	router = express.Router();

// for authentication
router.all('/api/*', function(req, res, next) {
	console.log('this is api authentication router...');
	next();
});

// router.get(['/', '/*'], function(req, res, next) {
// 	if (!(req.url.indexOf('/public') === 0) &&
// 		!(req.url.indexOf('/api') === 0) &&
// 		!(req.url.indexOf('/static') === 0)) {
// 		res.render(router.options.index, {
// 			csrfToken: res.locals._csrf
// 		});
// 		return;
// 	}
// 	next();
// });

module.exports = function(options) {
	router.options = options || {};
	return router;
};

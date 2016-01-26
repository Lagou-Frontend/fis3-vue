'use strict';

var express = require('express'),
	router = express.Router();
	// apiRouter = express.Router(),
	// viewRouter = express.Router();

// for authentication
// apiRouter.all('/*', function(req, res, next) {
// 	console.log('this is api authentication router...');
// 	next();
// });
//
// exports.apiRouter = function(options) {
// 	apiRouter.options = options || {};
// 	return apiRouter;
// };
//
// viewRouter.all('/*', function(req, res, next) {
// 	console.log('this is view router...');
// 	next();
// });
// exports.viewRouter = function(options) {
// 	viewRouter.options = options || {};
// 	return viewRouter;
// };

router.get(['/', '/*'], function(req, res, next) {
	if (!(req.url.indexOf('/public') === 0) &&
		!(req.url.indexOf('/api') === 0) &&
		!(req.url.indexOf('/static') === 0)) {
		res.render(router.options.index, {
			csrfToken: res.locals._csrf
		});
		return;
	}
	next();
});
module.exports = function(options) {
	router.options = options || {};
	return router;
};

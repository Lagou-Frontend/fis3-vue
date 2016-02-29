/**
 * TODO
 * 目标：用文件目录结构自动生成route
 * 原则：约定大于配置
 * 参考：https://github.com/xinyu198736/rainbow
 */
'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const apiRouter = express.Router();
const commonRouter = express.Router();

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

module.exports = {
	commonRouter: function(options) {
		commonRouter.get(['/', '/*'], function(req, res, next) {
			if (!(req.url.indexOf('/public') === 0) &&
				!(req.url.indexOf('/api') === 0) &&
				!(req.url.indexOf('/static') === 0)) {
				res.render(commonRouter.options.index, {
					csrfToken: res.locals._csrf
				});
				return;
			}
			next();
		});
		commonRouter.options = options || {};
	},
	apiRouter: function(app) {
		app.use('/api', apiRouter);
		walk(__dirname + '/../routes/', apiRouter);
	}
};

// module.exports = function(app) {
// 	// 此处细分路由
// 	app.use('/api', apiRouter);
// 	walk(__dirname + '/../routes/', apiRouter);
// };

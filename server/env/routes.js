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
const viewRouter = express.Router();

function walk(rootdir, router, subdir) {
	var absRootdir = path.resolve(__dirname, rootdir);
	var abspath = subdir ? path.join(absRootdir, subdir) : absRootdir;
	fs.readdirSync(abspath).forEach(function(filename) {
		var filepath = path.join(abspath, filename);
		var relativePath = path.join(subdir || '', filename || '');
		if (fs.statSync(filepath).isDirectory()) {
			walk(absRootdir, router, relativePath);
		} else {
			require(rootdir + relativePath)(router);
		}
	});
}

module.exports = {
	commonRouter: function(app, options) {
		app.use('/', commonRouter);
		commonRouter.get(['/', '/*'], function(req, res, next) {
			if (req.url === '/') {
				res.render(options.index, {
					csrfToken: res.locals._csrf
				});
				return;
			}
			next();
		});
		// commonRouter.options = options || {};
	},
	apiRouter: function(app) {
		app.use('/api', apiRouter);
		walk('../routes/api/', apiRouter);
	},
	viewRouter: function(app) {
		app.use('/', viewRouter);
		walk('../routes/view/', viewRouter);
	}
};

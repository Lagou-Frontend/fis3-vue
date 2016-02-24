/**
 * TODO
 * 目标：用文件目录结构自动生成route
 * 原则：约定大于配置
 * 参考：https://github.com/xinyu198736/rainbow
 */
'use strict';

const fs = require('fs');
const path = require('path');
const apiRouter = require('express').Router();

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
	// 此处细分路由
	app.use('/api', apiRouter);
	walk(__dirname + '/../routes/', apiRouter);
};

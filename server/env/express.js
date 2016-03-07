"use strict";

const meta = require('../../package.json');
const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const compress = require('compression');
const path = require('path');
const swig = require('swig');
const lusca = require('lusca');
const expressValidator = require('express-validator');
const middleware = ['csrf', 'authentication', 'combo', 'proxy', 'static', 'error', 'ticketValidator'];
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const config = require('../../config');
const template = require('art-template');

module.exports = function(app) {
	// set相关变量
	// app.engine('html', swig.renderFile);
	app.set('name', meta.name);
	app.set('version', meta.version);
	app.set('port', process.env.PORT || 4000);
	app.set('root', path.resolve(__dirname, '../../').replace(/\/+$/, ''));
	app.set('views', path.resolve(__dirname, '../../.dist/public/').replace(/\/+$/, ''));
	template.config('base', '');
	template.config('extname', '.html');
	app.engine('.html', template.__express);
	app.set('view engine', 'html');
	app.set('view cache', config.view_cache);
	app.set('logger', console);
	app.enable('trust proxy');

	swig.setDefaults({
		cache: config.viewCache
	});

	// set middleware
	// lazy load middlewares
	middleware.forEach(function(m) {
		Object.defineProperty(middleware, m, {
			get: function() {
				return require('../middleware/' + m);
			}
		});
		// middleware.__defineGetter__(m, function() {
		// 	return require('../middleware/' + m);
		// });
	});

	app.use(cookieParser());
	app.use(session({
		secret: 'fis3-vue',
		resave: true,
		saveUninitialized: true,
		store: new RedisStore({
			host: config.redisHost,
			port: config.redisPort,
			client: redis.createClient()
		})
	}));

	// 关闭lusca的csrf，使用自定义的
	app.use(lusca({
		csrf: false,
		xframe: 'SAMEORIGIN',
		p3p: false,
		xssProtection: true
	}));
	app.use(middleware.csrf());
	app.use(middleware.authentication()); // 鉴权
	app.use(middleware.ticketValidator()); // 自动登录票据验证
	app.use(compress());
	app.use('/co', middleware.combo());

	// 加载路由
	require('./routes')['commonRouter'](app, {
		index: path.resolve(config.dest, 'public/index.html')
	});
	require('./routes')['apiRouter'](app);
	require('./routes')['viewRouter'](app);

	// 代理设置
	// app.use('/api', middleware.proxy({
	// 	target: config.api_target
	// }));

	// static resources
	app.use('/public', middleware.static(path.join(config.dest, '/public')));
	app.use('/static', middleware.static(path.join(config.dest, '/static')));
	app.use('/libs', express.static(path.join(app.get('root'), '/libs')));

	// 处理404错误
	app.use(function(req, res, next) {
		var err = new Error('Not Found: ' + req.url);
		err.status = 404;
		next(err);
		// res.status(404).sendFile(config.root + '/views/404.html');
	});

	// 处理500错误
	app.use(middleware.error());
};

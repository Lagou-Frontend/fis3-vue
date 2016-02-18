"use strict";

const meta = require('../../package.json');
const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const compress = require('compression');
const path = require('path');
const swig = require('swig');
const lusca = require('lusca');
const middleware = ['csrf', 'authentication', 'combo', 'router', 'proxy', 'static', 'error', 'ticketValidator'];
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const config = require('../../config');

module.exports = function(app) {
	// set相关变量
	app.engine('html', swig.renderFile);
	app.set('name', meta.name);
	app.set('version', meta.version);
	app.set('port', process.env.PORT || 4000);
	app.set('root', path.resolve(__dirname, '../../').replace(/\/+$/, ''));
	app.set('views', path.resolve(__dirname, '../../.dist/').replace(/\/+$/, ''));
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
	app.use(middleware.authentication());
	app.use(middleware.ticketValidator());
	app.use(compress());
	app.use('/co', middleware.combo());

	// router
	// app.use('/api', middleware.router.apiRouter());
	// app.use(middleware.router.viewRouter({
	// 	index: path.resolve(config.dest, 'public/index.html')
	// }));
	app.use(middleware.router({
		index: path.resolve(config.dest, 'public/index.html')
	}));
	// app.use('/api', middleware.proxy({
	// 	target: config.api_target
	// }));

	// static resources
	app.use('/public', middleware.static(path.join(config.dest, '/public')));
	app.use('/static', middleware.static(path.join(config.dest, '/static')));
	app.use('/libs', express.static(path.join(app.get('root'), '/libs')));
	app.use(middleware.error());
};

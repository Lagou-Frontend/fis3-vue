/* 验证是否是保护资源
	验证session 中是否有用户
	验证是否有 ticket
--有ticket 则传入下个过滤器 (ticket-validator-filter)
--没有ticket 构造重定向url，向server端口发请求
*/

'use strict';

const LoginProtocol = require('../sso/client/LoginProtocol');
const CasFilter = require('../sso/filter/abstract-cas-filter');
const PConst = require('../constants/protocol-constant');
const ValidateUrlUtil = require('../utils/validate-url-utils');
const logger = require('tracer').colorConsole();

module.exports = function() {
	return function(req, res, next) {
		// 如果是message，需要进行权限验证，未登录需要重定向到登录页面
		logger.log('req.session.USER_CONTEXT == ' + req.session.USER_CONTEXT);

		// 从请求获取ticket
		var ticket = CasFilter.retrieveParamsFromRequest(req, PConst.PARAM_TICKET);

		// 不是验证的url，直接跳走
		if (ValidateUrlUtil.isGrantST(req, ticket)) {
			next();
			return;
		}

		if (req.session.USER_CONTEXT === undefined && req.url.indexOf('/public/message/main.html') === 0) {
			var redirectUrl = new LoginProtocol(CasFilter.constructServiceUrl(req)).getRequestUrl();
			res.redirect(redirectUrl);
		} else {
			next();
		}
	};
};

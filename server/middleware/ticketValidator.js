/*
	有tiket 则继续判断，没有ticket 则传给下个过滤器
	向server发请求验证st

	验证失败抛出异常，重定向到下错误页面
	验证成功 设置 session ,直接转到下个过滤器，这里不再进行重定向。当然也可以配置
*/

'use strict';

const DEFAULT_VALIDATE_FAIL_URL = "http://www.lagou.com";
const logger = require('tracer').colorConsole();
const PConst = require('../constants/protocol-constant');
const CasFilter = require('../sso/filter/abstract-cas-filter');
const ValidateUrlUtil = require('../utils/validate-url-utils');
const ValidateServiceTicketProtocol = require('../sso/client/ValidateServiceTicketProtocol');
const Promise = require('bluebird');
const request = require('request');

// 验证票据
function validateTicket(service, ticket) {
	var vstProtocol = new ValidateServiceTicketProtocol(service, ticket);
	var validateUrl = vstProtocol.getRequestUrl();
	// post cas server get user infomation
	return new Promise(function(resolve, reject) {
		request(validateUrl, function(error, response, body) {
			if (!error && response.statusCode === 200) {
				resolve(body);
			} else {
				reject(error);
			}
		});
	});
	// var prequest = Promise.denodeify(request);
	// return prequest(validateUrl);
}

// 不是grantST将不会进入这个filter
module.exports = function() {
	return function(req, res, next) {
		// 如果是message，需要进行权限验证，需重定向
		let ticket = CasFilter.retrieveParamsFromRequest(req, PConst.PARAM_TICKET);
		let service = CasFilter.constructServiceUrl(req);

		// 不是验证的url，直接跳走
		if (!ValidateUrlUtil.isGrantST(req, ticket)) {
			next();
			return;
		}

		logger.debug('[验证票据] 进行验证票据 :' + ticket);
		validateTicket(service, ticket).then(function(body) {
			logger.debug('[验证票据] 票据验证结果 :' + body);
			var assertion;
			try {
				assertion = JSON.parse(body);
			} catch (e) {
				logger.error(e);
				logger.error('[验证票据] 票据验证失败：解析返回值错误');
				res.redirect(DEFAULT_VALIDATE_FAIL_URL);
				return;
			}

			if (assertion.success === true) {
				req.session.USER_CONTEXT = assertion.data;
				// 验证成功后，重定向到请求url，去掉ticket，因为st 已经失效
				logger.debug('[验证票据] 票据验证成功，重定向结果 :' + service);
				res.redirect(service);
			} else {
				// 验证失败，跳转到拉勾首页
				res.redirect(DEFAULT_VALIDATE_FAIL_URL);
			}
		}, function(error) {
			try {
				logger.info('[验证票据] 票据验证失败：' + JSON.parse(error));
			} catch (e) {
				logger.error('[验证票据] 票据验证失败：json 解析错误');
			}
			res.redirect(DEFAULT_VALIDATE_FAIL_URL);
		});

	};
};

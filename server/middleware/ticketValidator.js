/*
	有tiket 则继续判断，没有ticket 则传给下个过滤器
	向server发请求验证st

	验证失败抛出异常，重定向到下错误页面
	验证成功 设置 session ,直接转到下个过滤器，这里不再进行重定向。当然也可以配置
*/

'use strict';

const logger = require('tracer').colorConsole();
const PConst = require('../constants/protocol-constant');
const CasFilter = require('../sso/filter/abstract-cas-filter');
const ValidateUrlUtil = require('../utils/validate-url-utils');
const ValidateServiceTicketProtocol = require('../sso/client/ValidateServiceTicketProtocol');

const request = require('request');

function onSuccessfulValidation() {

}

// 验证票据
function validateTicket(req, service, ticket) {
	var vstProtocol = new ValidateServiceTicketProtocol(service, ticket);
	var validateUrl = vstProtocol.getRequestUrl();

	logger.log('validateUrl == ' + validateUrl);
	// post cas server get user infomation

	request(validateUrl, function(error, response, assertion) {
		if (!error && response.statusCode === 200) {
			if (assertion.success === true) {
				// TODO validate 成功后，设置session
				req.session.USER_CONTEXT = assertion;
			}
		}
	});
}

// 不是grantST将不会进入这个filter
module.exports = function() {
	return function(req, res, next) {
		// 如果是message，需要进行权限验证，需重定向
		const ticket = CasFilter.retrieveParamsFromRequest(req, PConst.PARAM_TICKET);
		const service = CasFilter.constructServiceUrl(req);

		// 不是验证的url，直接跳走
		if (!ValidateUrlUtil.isGrantST(req, ticket)) {
			next();
			return;
		}

		logger.debug('[验证票据] 进行验证票据 :' + ticket);
		validateTicket(req, service, ticket);
		// 验证成功后，重定向到请求url，去掉ticket，因为st 已经失效
		logger.info('Redirecting after successful ticket validation.');
		res.redirect(service);
	};
};

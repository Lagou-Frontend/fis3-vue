"use strict";

const LogoutProtocol = require('../sso/client/LogoutProtocol');
const PConst = require('../constants/protocol-constant');
const CasFilter = require('../sso/filter/abstract-cas-filter');
const logger = require('tracer').colorConsole();
const DomainConst = require('../constants/domain-constant');
// 前台登出url
const frontLogoutUrl = 'frontLogout.do';

const COOKIE_LOGIN = 'login';
const LAGOU_ROOT_DOMAIN = '.lagou.com';
const ROOT_PATH = '/';
const REDIRECT_URL = 'redirect_url';
// 顶级域名下昵称cookie 的key
const COOKIE_NICKNAME = 'unick';

/**
 * 是否是验证带有st参数的url
 * @param request
 * @return
 */
function _isTokenRequest(request) {
	return CasFilter.retrieveParamsFromRequest(request, PConst.PARAM_TICKET);
}

/**
 * 是否是后台登出
 * @param request
 * @return
 */
function _isBackChannelLogoutRequest(request) {
	if (request.method === 'POST') {
		return request.getParameter(PConst.PARAM_LOGOUT);
	}
	return false;
}

/**
 * 是否是前台登出
 * @param request
 * @return
 */
function _isFrontChannelLogoutRequest(request) {
	return request.url === frontLogoutUrl;
}

/**
 * 登出后的操作，清除cookie
 * @param request
 * @param response
 */
function _onLogout(request, response) {
	response.cookie(COOKIE_LOGIN, 'false', {
		domain: LAGOU_ROOT_DOMAIN,
		path: ROOT_PATH,
		secure: true
	});
	response.clearCookie(COOKIE_NICKNAME, {path: ROOT_PATH});
}

/**
 * 判断该url是否需要登录权限
 * @param request
 * @param response
 */
function _needLogin(redirectUrl) {
	return false;
}

/**
 * 获取登出时的重定向url
 * @param request
 * @param response
 */
function getRedirectUrl(request) {
	var redirectUrl = request.session.REDIRECT_URL;

	if (redirectUrl && !_needLogin(redirectUrl)) {
		return redirectUrl;
	}
	return DomainConst.LAGOU_DOMAIN;
}

/**
 * 处理登出
 * 0.判断是否含有st
 *  --处理
 * 1.判断是否后台登出
 *     --处理
 * 2.前台登出
 *     --处理
 * 3.其他--忽略的请求
 *    打印日志
 * @param request
 * @param response
 * @return
 */
function process(request, response) {
	if (_isTokenRequest(request) && !_isBackChannelLogoutRequest(request)) { // 含有ticket
		logger.log('Received a token request');
		// recordSession(request);
		return true;
	} else if (_isBackChannelLogoutRequest(request)) { // 后端登出
		logger.log('Received a back channel logout request');
		destroySession(request);
		_onLogout(request, response);
		return false;
	} else if (_isFrontChannelLogoutRequest(request)) { // 前端登出
		logger.log('Received a front channel logout request');
        // 登出后的落地页(必须先获取，才能销毁session)
		var redirectionUrl = getRedirectUrl(request);
		destroySession(request);
		_onLogout(request, response);

        // redirection url to the CAS server
		response.sendRedirect(new LogoutProtocol(redirectionUrl).getRequestUrl());
		return false;
	} else {
		logger.log('Ignoring URI for logout: {}' + request.url);
		return true;
	}
}

/**
 * 登出后，清除有关session
 * 1.前台登出--处理
 * 2.后台登出--处理
 * 3.其他不管
 * @param request
*/
function destroySession(request) {
	var ticketId = null;
	var session = request.session;
	if (_isFrontChannelLogoutRequest(request)) {
	    ticketId = getTicketsessionStorage().getTicketId(session);
	} else if (_isBackChannelLogoutRequest(request)) {
	    ticketId = retrieveTicketFromRequest(request);
	} else {
	    return;
	}
	if (ticketId !== null) {
	    logger.debug("Remove session for ticketId {}", ticketId);

		session.USER_CONTEXT = null;

	    // String sessionId = getTicketsessionStorage().removeTicketSession(ticketId);
	    // // 销毁session
	    // getTicketsessionStorage().destorySession(sessionId, session);
	}
}

module.exports = function() {
	return function(req, res, next) {
		if (process(req, res)) {
			next();
		}
	};
};

'use strict';

const _ = require('lodash');
const PConst = require('../../constants/protocol-constant');

module.exports = {
	isLogined: function(req) {
		if (req.session[PConst.USER_CONTEXT] !== null) {
			return true;
		}
	},
	/**
	 * 生成 servcie 的url，
	 * 注意要忽略ticket，action，fi，osc， ofc，pfurl等参数，
	 * 不然会造成认证service与验证service的不一致导致验证失败
	 * @param request
	 * @return
	 */
	constructServiceUrl: function(req) {
		var url = PConst.BASE_URL + req.url;
		url = url.split('?')[0];
		var ignoreParams = [PConst.PARAM_TICKET, PConst.PARAM_FRAME_LOGIN, PConst.PARAM_ONFAIL_CALLBACK_FUNCTION,
			PConst.PARAM_ONSUCCESS_CALLBACK_FUNCTION, PConst.PARAM_ACTION, PConst.PARAM_PARENT_IFRAME_URL];
		var first = true;
		_.forIn(req.query, function(value, key) {
			if (_.findIndex(ignoreParams, k => k === key) === -1) {
				if (first) {
					url = url.concat(PConst.PARAM_SEPARATOR_QUESTION_MARK);
					first = false;
				} else {
					url = url.concat(PConst.PARAM_SEPARATOR_AND);
				}
				url = url.concat(key).concat(PConst.PARAM_SEPARATOR_EQUAL).concat(value);
			}
		});

		return url;
	},
	/**
	 * 获取请求参数
	 */
	retrieveParamsFromRequest: function(req, parameterName) {
		if (req.method === 'POST') {
			return req.body[parameterName];
		}

		if (req.method === 'GET') {
			return req.query[parameterName];
		}
	}
};

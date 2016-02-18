"use strict";

const PConst = require('../constants/protocol-constant');

const CasFilter = require('../sso/filter/abstract-cas-filter');

module.exports = {
	/**
	 * 判断一个请求是否是验证url
	 * @param req
	 * @param ticket
	 * @return
	 */
	isGrantST: function(req, ticket) {
		if (req === null || !ticket) {
			return false;
		}
		return PConst.GRANT_ST_ACTION === CasFilter.retrieveParamsFromRequest(req, PConst.PARAM_ACTION);
	}
};

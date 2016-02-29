"use strict";

var _ = require('lodash');
var paramChecker = require('../share/default-param-checker');
const PConst = require('../../constants/protocol-constant');
const config = require('../../../config');

module.exports = class AbstractSsoProtocol {
	constructor(service, shortUrl, action) {
		this.service = service;
		this.shortUrl = shortUrl;
		this.action = action;

		this.baseUrl = PConst.SSO_BASE_URL;
		this.serviceId = config.serviceId;
		this.secretKey = config.secretKey;
	}
	getRequestUrl() {
		var url = this.baseUrl + this.shortUrl;
		var params = this.buildParameters();
		var first = true;

		_.forIn(params, function(value, key) {
			if (first) {
				url = url.concat(PConst.PARAM_SEPARATOR_QUESTION_MARK);
				first = false;
			} else {
				url = url.concat(PConst.PARAM_SEPARATOR_AND);
			}
			url = url.concat(key).concat(PConst.PARAM_SEPARATOR_EQUAL).concat(encodeURIComponent(value));
		});

		return url;
	}
	getRawRequestUrl() {
		return this.baseUrl + this.shortUrl;
	}
	buildParameters() {
		var params = {};
		var timestamp = Date.now();
		var signature = paramChecker(this.serviceId, timestamp, this.action, this.secretKey);

		// params[PConst.PARAM_SERVICE] = this.service;
		params[PConst.PARAM_SERVICE_ID] = this.serviceId;
		params[PConst.PARAM_ACTION] = this.action;
		params[PConst.PARAM_TIMESTAMP] = timestamp;
		params[PConst.PARAM_SIGNATURE] = signature;

		return params;
	}
};

"use strict";

var _ = require('lodash');
var paramChecker = require('../share/default-param-checker');
const PConst = require('../../constants/protocol-constant');
const config = require('../../../config');

function AbstractSsoProtocol() {
	this.service = '';
	this.shortUrl = '';
	this.action = '';

	this.baseUrl = PConst.SSO_BASE_URL;
	this.serviceId = config.serviceId;
	this.secretKey = config.secretKey;
}

AbstractSsoProtocol.prototype.getRequestUrl = function() {
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
};

AbstractSsoProtocol.prototype.getRawRequestUrl = function() {
	return this.baseUrl + this.shortUrl;
};

AbstractSsoProtocol.prototype.buildParameters = function() {
	var params = {};
	var timestamp = Date.now();
	var signature = paramChecker(this.serviceId, timestamp, this.action, this.secretKey);

	// params[PConst.PARAM_SERVICE] = this.service;
	params[PConst.PARAM_SERVICE_ID] = this.serviceId;
	params[PConst.PARAM_ACTION] = this.action;
	params[PConst.PARAM_TIMESTAMP] = timestamp;
	params[PConst.PARAM_SIGNATURE] = signature;

	return params;
};

module.exports = AbstractSsoProtocol;

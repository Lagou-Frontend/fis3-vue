'use strict';
const PConst = require('../../constants/protocol-constant');
const logger = require('tracer').colorConsole();
var AbstractSsoProtocol = require('./AbstractSsoProtocol');

// baseUrl, serviceId, secretKey是由应用程序决定的

module.exports = class LoginProtocol extends AbstractSsoProtocol {
	constructor(service) {
		super(service, PConst.LOGIN_URL, PConst.LOGIN_ACTION);
	}
	buildParameters() {
		var params = super.buildParameters();
		params[PConst.PARAM_SERVICE] = this.service;

		logger.log('login params............ ' + JSON.stringify(params));
		return params;
	}
};

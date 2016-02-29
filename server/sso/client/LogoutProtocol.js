'use strict';
const PConst = require('../../constants/protocol-constant');
const logger = require('tracer').colorConsole();
var AbstractSsoProtocol = require('./AbstractSsoProtocol');

// baseUrl, serviceId, secretKey是由应用程序决定的

module.exports = class LogoutProtocol extends AbstractSsoProtocol {
	constructor(service) {
		super(service, PConst.LOGOUT_URL, PConst.LOGOUT_ACTION);
	}
	buildParameters() {
		var params = super.buildParameters();
		params[PConst.PARAM_SERVICE] = this.service;

		logger.log('logout params............ ' + JSON.stringify(params));
		return params;
	}
};

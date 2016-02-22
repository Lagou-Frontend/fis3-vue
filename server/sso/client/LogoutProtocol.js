'use strict';
const PConst = require('../../constants/protocol-constant');
const logger = require('tracer').colorConsole();
var AbstractSsoProtocol = require('./AbstractSsoProtocol');

// baseUrl, serviceId, secretKey是由应用程序决定的

function LogoutProtocol(service) {
	this.service = service;
	this.shortUrl = PConst.LOGOUT_URL;
	this.action = PConst.LOGOUT_ACTION;

	/**
	 * Override
	 */
	this.buildParameters = function() {
		var params = LogoutProtocol.prototype.buildParameters.call(this);
		params[PConst.PARAM_SERVICE] = this.service;

		logger.log('logout params............ ' + JSON.stringify(params));
		return params;
	};
}

LogoutProtocol.prototype = new AbstractSsoProtocol();

module.exports = LogoutProtocol;

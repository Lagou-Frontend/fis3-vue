'use strict';
const PConst = require('../../constants/protocol-constant');

var AbstractSsoProtocol = require('./AbstractSsoProtocol');

// baseUrl, serviceId, secretKey是由应用程序决定的

function LoginProtocol(service) {
	this.service = service;
	this.shortUrl = PConst.LOGIN_URL;
	this.action = PConst.LOGIN_ACTION;

	/**
	 * Override
	 */
	this.buildParameters = function() {
		var params = LoginProtocol.prototype.buildParameters.call(this);
		params[PConst.PARAM_SERVICE] = this.service;

		console.log('params............ ' + JSON.stringify(params));
		return params;
	};
}

LoginProtocol.prototype = new AbstractSsoProtocol();

module.exports = LoginProtocol;

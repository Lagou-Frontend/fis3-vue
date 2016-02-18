'use strict';
const PConst = require('../../constants/protocol-constant');
var AbstractSsoProtocol = require('./AbstractSsoProtocol');
const logger = require('tracer').colorConsole();

// baseUrl, serviceId, secretKey是由应用程序决定的

function ValidateServiceTicketProtocol(service, ticket) {
	this.ticket = ticket;
	this.service = service;
	this.shortUrl = PConst.VALIDATE_ST_URL;
	this.action = PConst.VALIDATE_ST_ACTION;

	/**
	 * Override
	 */
	this.buildParameters = function() {
		var params = ValidateServiceTicketProtocol.prototype.buildParameters.call(this);
		params[PConst.PARAM_SERVICE] = this.service;
		params[PConst.PARAM_TICKET] = this.ticket;

		logger.log('validate params: ' + JSON.stringify(params));
		return params;
	};
}

ValidateServiceTicketProtocol.prototype = new AbstractSsoProtocol();

module.exports = ValidateServiceTicketProtocol;

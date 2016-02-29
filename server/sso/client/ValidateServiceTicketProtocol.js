'use strict';
const PConst = require('../../constants/protocol-constant');
var AbstractSsoProtocol = require('./AbstractSsoProtocol');
const logger = require('tracer').colorConsole();

// baseUrl, serviceId, secretKey是由应用程序决定的

module.exports = class ValidateServiceTicketProtocol extends AbstractSsoProtocol {
	constructor(service, ticket) {
		super(service, PConst.VALIDATE_ST_URL, PConst.VALIDATE_ST_ACTION);
		this.ticket = ticket;
	}
	buildParameters() {
		var params = super.buildParameters();
		params[PConst.PARAM_SERVICE] = this.service;
		params[PConst.PARAM_TICKET] = this.ticket;

		logger.log('validate params: ' + JSON.stringify(params));
		return params;
	}
};

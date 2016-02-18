"use strict";

var crypto = require('crypto');
var StringUtils = require('../../utils/string-utils');

function md5Convert(s) {
	var hashSha = crypto.createHash('md5');
	return hashSha.update(s).digest('hex');
}

function encrypt(serviceId, timestamp, action, privatekey) {
	var keyOne = serviceId.toUpperCase() + timestamp;
	var keyTwo = privatekey.toUpperCase();
	var valueOne = (md5Convert(keyOne) + keyTwo).toUpperCase();
	return md5Convert(StringUtils.reverse(valueOne)).toUpperCase();
}

/**
 * 加密生成签名
 */
module.exports = function(serviceId, timestamp, action, secretKey) {
	return encrypt(serviceId, timestamp, action, secretKey);
};

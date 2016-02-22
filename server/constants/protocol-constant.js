
/**
	* session 里的用户信息
*/
exports.USER_CONTEXT = 'user_context';

/**
 * 验证ST action
 */
exports.VALIDATE_ST_ACTION = 'ValidateST';
/**
 * 验证ST页
 */
exports.VALIDATE_ST_URL = '/validate/validate.json';
/**
 * 返回验证ST结果 action
 */
exports.VALIDATE_ST_RESULT_ACTION = 'ValidateSTResult';

/**
 * 参数：服务Id
 */
exports.PARAM_SERVICE_ID = 'serviceId';
/**
 * 参数：action
 */
exports.PARAM_ACTION = 'action';

/**
 * 发放ST action
 */
exports.GRANT_ST_ACTION = 'grantST';

/**
 * 参数：时间戳
 */
exports.PARAM_TIMESTAMP = 'ts';
/**
 * 参数：加密后的结果signature
 */
exports.PARAM_SIGNATURE = 'signature';
/**
 * 回调接口参数名
 */
exports.PARAM_SERVICE = 'service';

/**
	* ST参数名
*/
exports.PARAM_TICKET = 'ticket';

/**
	* BASE URL
*/
// exports.BASE_URL = 'http://www.lagou.com';
// 开发阶段使用localhost
exports.BASE_URL = 'http://localhost';

/**
	* SSO URL
*/
exports.SSO_BASE_URL = 'https://passport.lagou.com';

/**
 * 登录action
 */
exports.LOGIN_ACTION = 'login';
/**
 * 登录页
 */
exports.LOGIN_URL = '/login/login.html';

/**
 * 后台登出 参数名
 */
exports.PARAM_LOGOUT = 'logoutRequest';

/**
 * ?
 */
exports.PARAM_SEPARATOR_QUESTION_MARK = '?';

/**
 * &
 */
exports.PARAM_SEPARATOR_AND = '&';

/**
 * =
 */
exports.PARAM_SEPARATOR_EQUAL = '=';

exports.PARAM_FRAME_LOGIN = 'fl';

exports.PARAM_ONSUCCESS_CALLBACK_FUNCTION = 'osc';

exports.PARAM_ONFAIL_CALLBACK_FUNCTION = 'ofc';

exports.PARAM_PARENT_IFRAME_URL = 'pfurl';

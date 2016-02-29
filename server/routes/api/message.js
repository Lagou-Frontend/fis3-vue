const messages = require('../../controllers/messages');

module.exports = function(router) {
	router.route('/messages')
		.get(messages.list)
		.post(messages.list);
};

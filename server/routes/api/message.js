const messages = require('../../controllers/messages');

module.exports = function(router) {
	router
		.get('/messages', messages.list)
		.post('/messages', messages.list);
};

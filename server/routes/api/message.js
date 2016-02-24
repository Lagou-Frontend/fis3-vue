const messages = require('../../controllers/messages');

module.exports = function(app) {
	app.get('/messages', messages.list);
	app.post('/messages', messages.list);
};

const messages = require('../../controllers/messages');

module.exports = function(app) {
	app.get('/api/messages', messages.list);
	app.post('/api/messages', messages.list);
};

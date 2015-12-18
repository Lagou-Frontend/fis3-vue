const users = require('../controllers/users');

module.exports = function(app) {
	app.get('/api/users/:id', users.show);
};

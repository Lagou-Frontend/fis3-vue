const users = require('../controllers/users');

module.exports = function(app) {
	app.get('/user', users.delete);
};

const users = require('../../controllers/users');
// const apiRouter = require('../../middleware/router').apiRouter;

module.exports = function(app) {
	// app.post('/api/users', users.show);
	app.get('/users', users.list);
};

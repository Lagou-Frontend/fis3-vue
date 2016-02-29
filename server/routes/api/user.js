const users = require('../../controllers/users');
// const apiRouter = require('../../middleware/router').apiRouter;

module.exports = function(router) {
	// app.post('/api/users', users.show);
	router.get('/users', users.list);
};

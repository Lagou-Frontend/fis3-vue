'use strict';
// import controller
const users = require('../controllers/users');

module.exports = function(app) {
	app.get('/user/:id', users.show);
};

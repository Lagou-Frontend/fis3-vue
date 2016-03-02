const users = require('../../controllers/users');

module.exports = function(router) {
	router.get('/message/detail.html', function(req, res) {
		// res.send('message detail ');
		res.render('public/message/main', {});
	});
	router.get('/message/setting.html', function(req, res) {
		res.send('message setting ');
	});
};

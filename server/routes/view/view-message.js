const users = require('../../controllers/users');

module.exports = function(app) {
	app.get('/message/detail.html', function(req, res) {
		// res.send('message detail ');
		res.render('public/message/main', {});
	});
	app.get('/message/setting.html', function(req, res) {
		res.send('message setting ');
	});
};

var fs = require('fs');

module.exports = {
	key: fs.readFileSync('../ssl/private.key'),
	cert: fs.readFileSync('../ssl/public.cert')
};

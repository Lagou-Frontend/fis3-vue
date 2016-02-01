module.exports = {
	parseContentFilter: function(message) {
		if (typeof message.content === 'object') {
			return;
		}
		if (message.content) {
			message.content = $.parseJSON(message.content);
			message.content.companyShowName = message.content.companyShortName || message.content.companyName;
		}
	}
};

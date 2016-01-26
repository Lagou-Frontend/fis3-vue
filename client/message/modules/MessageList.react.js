var React = require('../../../dep/react/react');
var AllMessage = require('./AllMessage.react');
var DeliverMessage = require('./DeliverMessage.react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="twrap">
                <div className="tab-content" id="msgContent">
                    <AllMessage />
					<DeliverMessage />
                </div>
            </div>
		);
	}
});

var React = require('../../../dep/react/react');
var AllMessage = require('./message-content/AllMessage.react');
var DeliverMessage = require('./message-content/DeliverMessage.react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="twrap">
				<div className="tab-content" id="msgContent">
					<AllMessage data={this.props.data} isActive={(this.props.currentTab === '#all')} />
					<DeliverMessage data={this.props.deliverData} isActive={(this.props.currentTab === '#deliver')}/>
				</div>
			</div>
		);
	}
});

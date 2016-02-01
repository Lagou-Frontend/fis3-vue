var React = require('../../../../dep/react/react');
var DeliverMsgItem = require('../message-info/DeliverMsgItem.react');
var utils = require('../../common/parse-message.js');

module.exports = React.createClass({
	render: function() {
		var msgNodes;
		var feBase = 'http://www.lagou.com';
		if (this.props.data !== null) {
			msgNodes = this.props.data.content.data.postMessageInfo.result.map(function(msg) {
				utils.parseContentFilter(msg);
				if (msg !== undefined && msg.messageType === 'DELIVER') {
					return (<DeliverMsgItem key={msg.id} data={msg} FE_base={feBase} />);
				} else {
					return null;
				}
			});
		}
		return (
			<div className={this.props.isActive ? 't-content-item active' : 't-content-item'} data-id="#all" data-tag="">
				<ul className="msg-list" id="allListContainer">
					{msgNodes}
				</ul>
				<div className="item_con_pager" data-container-id="allListContainer" data-template-id="msgListTpl" data-keyword=""></div>
			</div>
		);
	}
});

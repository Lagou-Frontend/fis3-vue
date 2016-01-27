var React = require('../../../../dep/react/react');
var DeliverMsgItem = require('../message-info/DeliverMsgItem.react');

module.exports = React.createClass({
	render: function() {
		var msgNodes;
		if (this.props.data !== null) {
			msgNodes = this.props.data.content.data.postMessageInfo.result.map(function(msg) {
				return (<DeliverMsgItem data={msg} />);
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

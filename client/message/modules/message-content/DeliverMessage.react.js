var React = require('../../../../dep/react/react');

var DeliverMsgItem = require('../message-info/DeliverMsgItem.react');

module.exports = React.createClass({
	render: function() {
		// var deliverMsgs = this.props.data.map(function(msg) {
		// 	return (<DeliverMsgItem data = {
		// 			{msg}
		// 		}> </DeliverMsgItem>
		// 	);
		// });
		return (
			<div className={this.props.isActive ? 't-content-item active' : 't-content-item'} data-id="#deliver" data-tag="DELIVER">
				<ul className="msg-list" id="applyListContainer">
					<li>deliverMsgs1</li>
					<li>deliverMsgs2</li>
					<li>deliverMsgs3</li>
				</ul>
				<div className="item_con_pager" data-container-id="applyListContainer" data-template-id="msgListTpl" data-keyword=""></div>
			</div>
		);
	}
});

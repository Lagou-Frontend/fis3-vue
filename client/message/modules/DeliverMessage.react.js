var React = require('../../../dep/react/react');
module.exports = React.createClass({
	render: function() {
		return (
			<div className="t-content-item" data-id="#deliver" data-tag="DELIVER">
			    <ul className="msg-list" id="applyListContainer">
					<li>deliver1</li>
					<li>deliver2</li>
					<li>deliver3</li>
			    </ul>
			    <div className="item_con_pager" data-container-id="applyListContainer" data-template-id="msgListTpl" data-keyword=""></div>
			</div>
		);
	}
});

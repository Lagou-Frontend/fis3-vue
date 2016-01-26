var React = require('../../../dep/react/react');
module.exports = React.createClass({
	render: function() {
		return (
			<div className="t-content-item active" data-id="#all" data-tag="">
				<ul className="msg-list" id="allListContainer">
					<li>123</li>
					<li>123</li>
					<li>123</li>
				</ul>
				<div className="item_con_pager" data-container-id="allListContainer" data-template-id="msgListTpl" data-keyword=""></div>
			</div>
		);
	}
});

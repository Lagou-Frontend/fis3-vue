var React = require('../../../dep/react/react');

module.exports = React.createClass({
	handleClick: function(e) {
		var targetDom = e.target;
		this.props.changeTab(targetDom.getAttribute('href'), targetDom.getAttribute('data-type'));
	},
	render: function() {
		return (
			<div className="category-tab">
				<div className="item-wrap">
					<ul className="tab" id="tabContainer">
						<li className={this.props.currentTab === '#all' ? 'tab-item active' : 'tab-item'}>
							<a href="#all" data-type="" onClick={this.handleClick}>全部</a>
						</li>
						<li className="sep"><span>|</span></li>
						<li className={this.props.currentTab === '#deliver' ? 'tab-item active' : 'tab-item'}>
							<a href="#deliver" data-type="DELIVER" onClick={this.handleClick}>投递反馈</a>
						</li>
						<li className="sep"><span>|</span></li>
						<li className={this.props.currentTab === '#plus' ? 'tab-item active' : 'tab-item'}>
							<a href="#plus" data-type="PLUS" onClick={this.handleClick}>职位邀请</a>
						</li>
						<li className="sep"><span>|</span></li>
						<li className={this.props.currentTab === '#pai' ? 'tab-item active' : 'tab-item'}>
							<a href="#pai" data-type="PAI" onClick={this.handleClick}>一拍</a>
						</li>
						<li className="sep"><span>|</span></li>
						<li className={this.props.currentTab === '#system' ? 'tab-item active' : 'tab-item'}>
							<a href="#system" data-type="SYSTEM" onClick={this.handleClick}>系统通知</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

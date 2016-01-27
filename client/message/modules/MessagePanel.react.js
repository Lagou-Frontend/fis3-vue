var React = require('../../../dep/react/react');
var AllMessage = require('./message-content/AllMessage.react');
var DeliverMessage = require('./message-content/DeliverMessage.react');

var Tabs = React.createClass({
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

var TabContents = React.createClass({
	render: function() {
		return (
			<div className="twrap">
				<div className="tab-content" id="msgContent">
					<AllMessage data={this.props.data} isActive={(this.props.currentTab === '#all')} />
					<DeliverMessage isActive={(this.props.currentTab === '#deliver')}/>
				</div>
			</div>
		);
	}
});

module.exports = React.createClass({
	loadDataFromServer: function(queryType) {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			data: {
				queryType: queryType || ''
			},
			success: function(data) {
				this.setState({
					allMsg: data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {
			currentTab: '#all',
			allMsg: null,
			deliverMsg: null
		};
	},
	changeTab: function(hash, queryType) {
		this.setState({
			currentTab: hash
			// queryType: queryType // ? 为啥此处的setState不是同步的？？
		});
		this.loadDataFromServer(queryType);
	},
	componentDidMount: function() {
		this.loadDataFromServer();
	},
	render: function() {
		return (
			<div>
                <div className="setting-box">
                    <h2 className="main-title">我的消息</h2>
                    <div className="setting-btn">
                        <a href="${FE_base}/message/settingsdetail.html">设置</a>
                    </div>
                </div>
                <Tabs changeTab={this.changeTab} currentTab={this.state.currentTab}/>
				<TabContents data={this.state.allMsg} currentTab={this.state.currentTab}/>
			</div>
		);
	}
});

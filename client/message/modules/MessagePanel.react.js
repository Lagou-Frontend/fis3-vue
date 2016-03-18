"use strict"

var React = require('../../../dep/react/react');
var Tabs = require('./Tabs.react');
var TabContents = require('./TabContents.react');

module.exports = React.createClass({
	loadDataFromServer: function(queryType) {
		$.ajax({
			url: this.props.url,
			// type: 'post',
			dataType: 'json',
			cache: false,
			data: {
				queryType: queryType || ''
			},
			success: function(data) {
				switch (queryType) {
				case 'DELIVER':
					this.setState({
						deliver: {
							msg: data,
							loaded: true
						}
					});
					break;
				default:
					this.setState({
						all: {
							msg: data,
							loaded: true
						}
					});
				}
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {
			currentTab: '#all',
			all: {
				msg: null,
				loaded: false,
				page: 1
			},
			deliver: {
				msg: null,
				loaded: false,
				page: 1
			}
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
                        <a href="message/settingsdetail.html">设置</a>
                    </div>
                </div>
                <Tabs changeTab={this.changeTab} currentTab={this.state.currentTab}/>
				<TabContents data={this.state.all.msg} deliverData={this.state.deliver.msg} currentTab={this.state.currentTab}/>
			</div>
		);
	}
});

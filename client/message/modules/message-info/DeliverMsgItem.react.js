var React = require('../../../../dep/react/react');

module.exports = React.createClass({
	render: function() {
		return (
			<li className="msg-box">
				<div className="msg-body">
					<div className="msg-type"><i className="msg-avant apply-v"></i></div>
					<div className="msg-content clearfix">
						<div className="msg-head clearfix">
							<div className="fl">投递反馈</div>
							<div className="fr">{this.props.messageTime}</div>
						</div>
						<dl className="info">
							<dt>
								<a className="company-logo" target="_blank" href="{this.props.FE_base}/gongsi/{this.props.content.companyId}.html">
								<img className="" src="{this.props.FE_base}/{this.props.content.companyLogo}" alt="{this.props.content.companyShowName}" />
								</a>
							</dt>
							<dd className="msg-info">
								<h4>
									<a href="{this.props.FE_base}/jobs/{this.props.content.positionId}.html" target="_blank" className="job-title">{this.props.content.positionName}</a>
									<em>·</em>
									<a href="{this.props.FE_base}/gongsi/{this.props.content.companyId}.html" target="_blank">{this.props.content.companyShowName}</a>
								</h4>
								<div className="msg-status">
									<span>最新状态：</span>
									<a href="{this.props.FE_base}/message/businessDetail.html?type=DELIVER&businessId={this.props.businessId}" target="_blank">{this.props.businessStatus}</a>
								</div>
								<a className="to-detail" target="_blank" href="{this.props.FE_base}/message/businessDetail.html?type=DELIVER&businessId={this.props.businessId}">去看看</a>
							</dd>
						</dl>
					</div>
				</div>
			</li>
		);
	}
});

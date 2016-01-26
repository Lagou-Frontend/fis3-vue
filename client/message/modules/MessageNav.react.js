var React = require('../../../dep/react/react');
module.exports = React.createClass({
	changeTabAndLoad: function(target) {
		if (!target) {
			target = location.hash = '#all';
		}

		var $target = $('div[data-id="' + target + '"]'),
			queryType = $target.data('tag'),
			$pager = $target.find('.item_con_pager'),
			loaded = $target.data('loaded'),
			containerId = $pager.data('container-id'),
			templateId = $pager.data('template-id');
		$('#tabContainer').find('a[href="' + target + '"]').closest('li').addClass('active').siblings().removeClass('active');
		$target.addClass('active').siblings().removeClass('active');

		if (!loaded || loaded === 'false') {
            $.ajax({
                url: this.props.url,
                type: 'get',
                dataType: 'json',
                data: {
                    queryType: queryType,
                    pageNo: 1
                }
            })
            .done(function(data) {
                $target.data('loaded', 'true');
                console.log(data);
            })
            .fail(function() {
                // 失败render无消息
                console.log('加载数据失败');
            });
        }
	},
	clickTab: function(e) {
		var targetHash = e.target.getAttribute('href');
		this.changeTabAndLoad(targetHash);
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
                <div className="category-tab">
                    <div className="item-wrap">
                        <ul className="tab" id="tabContainer">
                            <li className="tab-item"><a href="#all"
								onClick = {
									this.clickTab
								}
							>全部</a></li>
                            <li className="sep"><span>|</span></li>
                            <li className="tab-item"><a href="#deliver"
								onClick = {
									this.clickTab
								}
							>投递反馈</a></li>
                            <li className="sep"><span>|</span></li>
                            <li className="tab-item"><a href="#plus"
								onClick = {
									this.clickTab
								}
							>职位邀请</a></li>
                            <li className="sep"><span>|</span></li>
                            <li className="tab-item"><a href="#pai"
								onClick = {
									this.clickTab
								}
							>一拍</a></li>
                            <li className="sep"><span>|</span></li>
                            <li className="tab-item"><a href="#system"
								onClick = {
									this.clickTab
								}
							>系统通知</a></li>
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
});

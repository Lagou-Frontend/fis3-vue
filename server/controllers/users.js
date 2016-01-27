'use strict';

const logger = require('tracer').colorConsole();

/**
 *  Show profile
 */

exports.show = function(req, res) {
	logger.info('hahaha in user show');
	// res.send('show user, id = ' + req.params.id);
	res.json([{
		author: 'ghlin',
		id: '123',
		text: 'comment1'
	}, {
		author: 'ghlin1',
		id: '124',
		text: 'comment2'
	}]);
};

exports.delete = function(req, res) {
	logger.info('delete');
	res.send('delete user');
};

exports.list = function(req, res) {
	logger.info('list');
	res.json({
		"content": {
			"data": {
				"nowDate": "2016-01-27 17:19:55",
				"postMessageInfo": {
					"pageSize": 10,
					"start": "0",
					"result": [{
						"recordId": "689038465014304768",
						"messageId": "689033624527441920",
						"createTime": "2016-01-18 18:55:46",
						"messageTime": "2016-01-18 18:40:00",
						"createTimeStr": "2016-01-18 18:55:46",
						"expireTime": "2016-01-18 23:55:00",
						"expireTimeStr": "2016-01-18 23:55:00",
						"messageType": "SYSTEM",
						"receiveType": "PC",
						"readSource": "PC",
						"publishUserid": 1,
						"receiveUserId": 1547171,
						"readTime": "2016-01-18 18:55:46",
						"readTimeStr": "2016-01-18 18:55:46",
						"content": "{\"type\":\"TEXT\",\"info\":\"@yasi(CDN的passport和account) --- 周二先测，测试完毕，√\\n@icey(个人信息&公司帐号管理) --- 周二开测，测试完毕待上线，已上线，√\\n@friday(jd页)  --- 用例编写中，编写完毕，待测试，一轮测试完毕，准备上线，已上线，用例编写，\\n@leo(https)  --- 待排期，已上线，√\\n@honge(plus)  --- 待排期，已上线，√，遗留个b\"}",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "689038464750063616",
						"messageId": "689021043842617344",
						"createTime": "2016-01-18 18:55:46",
						"messageTime": "2016-01-18 17:45:00",
						"createTimeStr": "2016-01-18 18:55:46",
						"expireTime": "2016-01-18 23:55:00",
						"expireTimeStr": "2016-01-18 23:55:00",
						"messageType": "SYSTEM",
						"receiveType": "PC",
						"readSource": "PC",
						"publishUserid": 1,
						"receiveUserId": 1547171,
						"readTime": "2016-01-18 18:55:46",
						"readTimeStr": "2016-01-18 18:55:46",
						"content": "{\"type\":\"PICTURE_AND_TEXT\",\"title\":\"胆子特别大敢给全站C端pc用户发送消息的就是我啊是我啊真的是我啊嗯嗯就是我呢没错的。一二三四五六结束\",\"img\":\"http://www.lagou.com/image1/M00/00/9E/CgHIilacqpmARi5mAAC96XBfLXo591.JPG\",\"info\":\"胆子特别大敢给全站C端pc用户发送消息的就是我啊是我啊真的是我啊嗯嗯就是我呢没错的。一二三四五六简介。胆子特别大敢给全站C端pc用户发送消息的就是我啊是我啊真的是我啊嗯嗯就是我呢没错的。一二三四五结束\",\"articleLink\":\"http://pstatic.lagou.com/plat-cheese/notify/html/2016-01-18_d8965bab-91ec-46c8-8094-a3a5306c92e8.html\"}",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "689038464443879424",
						"messageId": "689018554946818048",
						"createTime": "2016-01-18 18:55:46",
						"messageTime": "2016-01-18 17:35:00",
						"createTimeStr": "2016-01-18 18:55:46",
						"expireTime": "2016-01-18 23:55:00",
						"expireTimeStr": "2016-01-18 23:55:00",
						"messageType": "SYSTEM",
						"receiveType": "PC",
						"readSource": "PC",
						"publishUserid": 1,
						"receiveUserId": 1547171,
						"readTime": "2016-01-18 18:55:46",
						"readTimeStr": "2016-01-18 18:55:46",
						"content": "{\"type\":\"PICTURE_AND_TEXT\",\"title\":\"胆子特别大敢给全站C端pc用户发送消息的就是我啊是我啊真的是我啊嗯嗯就是我呢没错的。一二三四五六结束\",\"img\":\"http://www.lagou.com/image1/M00/00/9E/CgHIilacqpmARi5mAAC96XBfLXo591.JPG\",\"info\":\"胆子特别大敢给全站C端pc用户发送消息的就是我啊是我啊真的是我啊嗯嗯就是我呢没错的。一二三四五六简介。胆子特别大敢给全站C端pc用户发送消息的就是我啊是我啊真的是我啊嗯嗯就是我呢没错的。一二三四五结束\",\"articleLink\":\"http://pstatic.lagou.com/plat-cheese/notify/html/2016-01-18_9fc36347-80d2-4b03-811f-49b87153fd59.html\"}",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "688931072678957056",
						"messageId": "688931072414715904",
						"createTime": "2016-01-18 11:49:02",
						"messageTime": "2016-01-18 11:49:01",
						"createTimeStr": "2016-01-18 11:49:02",
						"expireTimeStr": "",
						"messageType": "PLUS",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547171,
						"businessId": "33958",
						"readTime": "2016-01-18 11:49:02",
						"readTimeStr": "2016-01-18 11:49:02",
						"content": "{\"id\":535984,\"companyId\":69313,\"companyName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyLog\":\"i/image1/M00/00/8D/CgHIDlaXDt2AWXECAAHN3ZV84SU725.jpg\",\"city\":\"北京\",\"positionName\":\"啊啊啊啊啊啊啊啊啊啊啊啊啊啊\",\"position40Name\":\"啊啊啊啊啊啊啊啊啊啊啊啊啊啊\",\"salary\":\"1k以上\",\"education\":\"不限\",\"workYear\":\"不限\",\"positionAdvantage\":\"滴答滴答滴答滴答滴答滴答\",\"createTime\":\"2016-01-11 11:48:29\",\"createTimeStr\":\"2016-01-11 11:48:29\",\"financestage\":\"D轮及以上\",\"companysize\":\"2000人以上\",\"companyfeatures\":\"哈哈哈哈哈哈哈\",\"industryfield\":\"移动互联网,电子商务\",\"resumeDisplayStatus\":\"已过期\",\"showDeliverResume\":false,\"showInterest\":true,\"oneword\":\"这是PLUS邀约\"}",
						"businessStatus": "INVITE_EXPIRE",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "688931073186467840",
						"messageId": "688931072846729216",
						"createTime": "2016-01-18 11:49:02",
						"messageTime": "2016-01-18 11:49:02",
						"createTimeStr": "2016-01-18 11:49:02",
						"expireTimeStr": "",
						"messageType": "PLUS",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547171,
						"businessId": "33962",
						"readTime": "2016-01-18 11:49:02",
						"readTimeStr": "2016-01-18 11:49:02",
						"content": "{\"id\":536326,\"companyId\":69313,\"companyName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyLog\":\"i/image1/M00/00/8D/CgHIDlaXDt2AWXECAAHN3ZV84SU725.jpg\",\"city\":\"北京\",\"positionName\":\"高端技术职位其它高端技术职位其它高端技术职位其它\",\"position40Name\":\"高端技术职位其它高端技术职位其它高端...\",\"salary\":\"25k-50k\",\"education\":\"硕士\",\"workYear\":\"5-10年\",\"positionAdvantage\":\"撒 打算萨达撒 撒打算萨达撒 撒打算萨达撒\",\"createTime\":\"2016-01-11 11:48:29\",\"createTimeStr\":\"2016-01-11 11:48:29\",\"financestage\":\"D轮及以上\",\"companysize\":\"2000人以上\",\"companyfeatures\":\"哈哈哈哈哈哈哈\",\"industryfield\":\"移动互联网,电子商务\",\"resumeDisplayStatus\":\"已过期\",\"showDeliverResume\":false,\"showInterest\":true,\"oneword\":\"这是PLUS邀约\"}",
						"businessStatus": "INVITE_EXPIRE",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "688931069289959424",
						"messageId": "688931068790837248",
						"createTime": "2016-01-18 11:49:01",
						"messageTime": "2016-01-18 11:49:01",
						"createTimeStr": "2016-01-18 11:49:01",
						"expireTimeStr": "",
						"messageType": "PLUS",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547171,
						"businessId": "33951",
						"readTime": "2016-01-18 11:49:01",
						"readTimeStr": "2016-01-18 11:49:01",
						"content": "{\"id\":535918,\"companyId\":69313,\"companyName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyLog\":\"i/image1/M00/00/8D/CgHIDlaXDt2AWXECAAHN3ZV84SU725.jpg\",\"city\":\"北京\",\"positionName\":\"董事\",\"position40Name\":\"董事\",\"salary\":\"100k以上\",\"education\":\"博士\",\"workYear\":\"10年以上\",\"positionAdvantage\":\"滴答滴答滴答\",\"createTime\":\"2016-01-11 11:48:29\",\"createTimeStr\":\"2016-01-11 11:48:29\",\"financestage\":\"D轮及以上\",\"companysize\":\"2000人以上\",\"companyfeatures\":\"哈哈哈哈哈哈哈\",\"industryfield\":\"移动互联网,电子商务\",\"resumeDisplayStatus\":\"已过期\",\"showDeliverResume\":false,\"showInterest\":true,\"oneword\":\"这是PLUS邀约\"}",
						"businessStatus": "INVITE_EXPIRE",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "688931071978508288",
						"messageId": "688931071450025984",
						"createTime": "2016-01-18 11:49:01",
						"messageTime": "2016-01-18 11:49:01",
						"createTimeStr": "2016-01-18 11:49:01",
						"expireTimeStr": "",
						"messageType": "PLUS",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547171,
						"businessId": "33957",
						"readTime": "2016-01-18 11:49:01",
						"readTimeStr": "2016-01-18 11:49:01",
						"content": "{\"id\":535944,\"companyId\":69313,\"companyName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyLog\":\"i/image1/M00/00/8D/CgHIDlaXDt2AWXECAAHN3ZV84SU725.jpg\",\"city\":\"北京\",\"positionName\":\"移动开发其它\",\"position40Name\":\"移动开发其它\",\"salary\":\"1k以上\",\"education\":\"不限\",\"workYear\":\"不限\",\"positionAdvantage\":\"点点滴滴\",\"createTime\":\"2016-01-11 11:48:29\",\"createTimeStr\":\"2016-01-11 11:48:29\",\"financestage\":\"D轮及以上\",\"companysize\":\"2000人以上\",\"companyfeatures\":\"哈哈哈哈哈哈哈\",\"industryfield\":\"移动互联网,电子商务\",\"resumeDisplayStatus\":\"已过期\",\"showDeliverResume\":false,\"showInterest\":true,\"oneword\":\"这是PLUS邀约\"}",
						"businessStatus": "INVITE_EXPIRE",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "688931068224606208",
						"messageId": "688931068010696704",
						"createTime": "2016-01-18 11:49:01",
						"messageTime": "2016-01-18 11:49:00",
						"createTimeStr": "2016-01-18 11:49:01",
						"expireTimeStr": "",
						"messageType": "PLUS",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547171,
						"businessId": "33950",
						"readTime": "2016-01-18 11:49:01",
						"readTimeStr": "2016-01-18 11:49:01",
						"content": "{\"id\":535916,\"companyId\":69313,\"companyName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyLog\":\"i/image1/M00/00/8D/CgHIDlaXDt2AWXECAAHN3ZV84SU725.jpg\",\"city\":\"北京\",\"positionName\":\"PHP\",\"position40Name\":\"PHP\",\"salary\":\"2k-3k\",\"education\":\"不限\",\"workYear\":\"1年以下\",\"positionAdvantage\":\"请问请问请问去问问企鹅额企鹅\",\"createTime\":\"2016-01-11 11:48:29\",\"createTimeStr\":\"2016-01-11 11:48:29\",\"financestage\":\"D轮及以上\",\"companysize\":\"2000人以上\",\"companyfeatures\":\"哈哈哈哈哈哈哈\",\"industryfield\":\"移动互联网,电子商务\",\"resumeDisplayStatus\":\"已过期\",\"showDeliverResume\":false,\"showInterest\":true,\"oneword\":\"这是PLUS邀约\"}",
						"businessStatus": "INVITE_EXPIRE",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "688931067037618176",
						"messageId": "688931066559467520",
						"createTime": "2016-01-18 11:49:00",
						"messageTime": "2016-01-18 11:49:00",
						"createTimeStr": "2016-01-18 11:49:00",
						"expireTimeStr": "",
						"messageType": "PLUS",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547171,
						"businessId": "33948",
						"readTime": "2016-01-18 11:49:00",
						"readTimeStr": "2016-01-18 11:49:00",
						"content": "{\"id\":535893,\"companyId\":69313,\"companyName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyLog\":\"i/image1/M00/00/8D/CgHIDlaXDt2AWXECAAHN3ZV84SU725.jpg\",\"city\":\"北京\",\"positionName\":\"文秘\",\"position40Name\":\"文秘\",\"salary\":\"1k以上\",\"education\":\"不限\",\"workYear\":\"不限\",\"positionAdvantage\":\"滴答滴答滴答滴答滴答滴答滴答滴答\",\"createTime\":\"2016-01-11 11:48:29\",\"createTimeStr\":\"2016-01-11 11:48:29\",\"financestage\":\"D轮及以上\",\"companysize\":\"2000人以上\",\"companyfeatures\":\"哈哈哈哈哈哈哈\",\"industryfield\":\"移动互联网,电子商务\",\"resumeDisplayStatus\":\"已过期\",\"showDeliverResume\":false,\"showInterest\":true,\"oneword\":\"这是PLUS邀约\"}",
						"businessStatus": "INVITE_EXPIRE",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "688931066353946624",
						"messageId": "688931065728995328",
						"createTime": "2016-01-18 11:49:00",
						"messageTime": "2016-01-18 11:49:00",
						"createTimeStr": "2016-01-18 11:49:00",
						"expireTimeStr": "",
						"messageType": "PLUS",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547171,
						"businessId": "33947",
						"readTime": "2016-01-18 11:49:00",
						"readTimeStr": "2016-01-18 11:49:00",
						"content": "{\"id\":535891,\"companyId\":69313,\"companyName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyLog\":\"i/image1/M00/00/8D/CgHIDlaXDt2AWXECAAHN3ZV84SU725.jpg\",\"city\":\"深圳\",\"positionName\":\"CEO\",\"position40Name\":\"CEO\",\"salary\":\"1k以上\",\"education\":\"博士\",\"workYear\":\"不限\",\"positionAdvantage\":\"滴答滴答滴答滴答滴答滴答滴答\",\"createTime\":\"2016-01-11 11:48:29\",\"createTimeStr\":\"2016-01-11 11:48:29\",\"financestage\":\"D轮及以上\",\"companysize\":\"2000人以上\",\"companyfeatures\":\"哈哈哈哈哈哈哈\",\"industryfield\":\"移动互联网,电子商务\",\"resumeDisplayStatus\":\"已过期\",\"showDeliverResume\":false,\"showInterest\":true,\"oneword\":\"这是PLUS邀约\"}",
						"businessStatus": "INVITE_EXPIRE",
						"isRead": false,
						"isNew": false
					}],
					"totalCount": "29",
					"pageNo": 1
				}
			},
			"rows": []
		},
		"message": "Query success!",
		"state": 1
	});
};

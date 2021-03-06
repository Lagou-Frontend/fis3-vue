'use strict';

const logger = require('tracer').colorConsole();
const request = require('request');

exports.list = function(req, res) {
	// logger.info('session ====== ' + JSON.stringify(req.session));
	// request.post({
	// 	url: 'http://www.lagou.com/message/msglist.json',
	// 	headers: {
	// 		'X-Requested-With': 'XMLHttpRequest',
	// 		'Accept': 'application/json, text/javascript, */*; q=0.01'
	// 	},
	// 	json: true,
	// 	form: {
	// 		queryType: '',
	// 		pageNo: 1
	// 	}
	// }, function(err, httpResponse, body) {
	// 	logger.info('msglist response: ' + JSON.stringify(body));
	// });


	res.json({
		"content": {
			"data": {
				"nowDate": "2016-02-01 11:17:59",
				"postMessageInfo": {
					"pageSize": 10,
					"start": "0",
					"result": [{
						"recordId": "687160898644742144",
						"messageId": "687160898619576320",
						"createTime": "2016-01-13 14:34:59",
						"messageTime": "2016-01-13 14:34:59",
						"createTimeStr": "2016-01-13 14:34:59",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "687161122473775104",
						"readTime": "2016-01-13 14:34:59",
						"readTimeStr": "2016-01-13 14:34:59",
						"content": "{\"id\":\"687161122473775104\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyName\":\"旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶\",\"positionId\":536326,\"createTime\":\"2016-01-13 14:34:59\",\"createTimeStr\":\"2016-01-13 14:34:59\",\"positionName\":\"高端技术职位其它高端技术职位其它高端技术职位其它\"}",
						"businessStatus": "SUCCESS",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "686386946016153600",
						"messageId": "686386945722552320",
						"createTime": "2016-01-13 12:38:53",
						"messageTime": "2016-01-13 12:38:53",
						"createTimeStr": "2016-01-13 12:38:53",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "686387156255641600",
						"readTime": "2016-01-11 11:19:35",
						"readTimeStr": "2016-01-11 11:19:35",
						"content": "{\"id\":\"686387156255641600\",\"userId\":1547173,\"companyId\":69396,\"companyLogo\":\"i/image1/M00/00/8C/CgHIDlaA_SGAC-00AAFKXHVUQ7E173.jpg\",\"companyShortName\":\"f??few\",\"companyName\":\"zhengli@lagou.com\",\"positionId\":536309,\"createTime\":\"2016-01-11 11:19:34\",\"createTimeStr\":\"2016-01-11 11:19:34\",\"positionName\":\"???\"}",
						"businessStatus": "READ",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "685293858606682112",
						"messageId": "685293858455687168",
						"createTime": "2016-01-13 11:19:09",
						"messageTime": "2016-01-13 11:19:09",
						"createTimeStr": "2016-01-13 11:19:09",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "685294051313979392",
						"readTime": "2016-01-08 10:56:02",
						"readTimeStr": "2016-01-08 10:56:02",
						"content": "{\"id\":\"685294051313979392\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼\",\"companyName\":\"旺仔牛奶\",\"positionId\":535987,\"createTime\":\"2016-01-08 10:56:02\",\"createTimeStr\":\"2016-01-08 10:56:02\",\"positionName\":\"222222222\"}",
						"businessStatus": "INTERVIEW",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "685663165144502272",
						"messageId": "685663165131919360",
						"createTime": "2016-01-13 11:11:38",
						"messageTime": "2016-01-13 11:11:38",
						"createTimeStr": "2016-01-13 11:11:38",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "685663368069124096",
						"readTime": "2016-01-09 11:23:32",
						"readTimeStr": "2016-01-09 11:23:32",
						"content": "{\"id\":\"685663368069124096\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyName\":\"旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶\",\"positionId\":535936,\"createTime\":\"2016-01-09 11:23:32\",\"createTimeStr\":\"2016-01-09 11:23:32\",\"positionName\":\"Android\"}",
						"businessStatus": "INTERVIEW",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "687109083660161024",
						"messageId": "687109082083102720",
						"createTime": "2016-01-13 11:09:06",
						"messageTime": "2016-01-13 11:09:05",
						"createTimeStr": "2016-01-13 11:09:06",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "687109298328834048",
						"readTime": "2016-01-13 11:09:06",
						"readTimeStr": "2016-01-13 11:09:06",
						"content": "{\"id\":\"687109298328834048\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyName\":\"旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶\",\"positionId\":535988,\"createTime\":\"2016-01-13 11:09:05\",\"createTimeStr\":\"2016-01-13 11:09:05\",\"positionName\":\"vvvvvvvvvvvvvv\"}",
						"businessStatus": "SUCCESS",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "686868957960998912",
						"messageId": "686868957424128000",
						"createTime": "2016-01-12 19:18:07",
						"messageTime": "2016-01-12 19:18:07",
						"createTimeStr": "2016-01-12 19:18:07",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "686869178635915264",
						"readTime": "2016-01-12 19:18:07",
						"readTimeStr": "2016-01-12 19:18:07",
						"content": "{\"id\":\"686869178635915264\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyName\":\"旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶\",\"positionId\":535917,\"createTime\":\"2016-01-12 19:14:55\",\"createTimeStr\":\"2016-01-12 19:14:55\",\"positionName\":\"投资顾问\"}",
						"businessStatus": "SUCCESS",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "686494549828308992",
						"messageId": "686494549262077952",
						"createTime": "2016-01-11 18:27:09",
						"messageTime": "2016-01-11 18:27:09",
						"createTimeStr": "2016-01-11 18:27:09",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "686494758650122240",
						"readTime": "2016-01-11 18:27:09",
						"readTimeStr": "2016-01-11 18:27:09",
						"content": "{\"id\":\"686494758650122240\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyName\":\"旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶\",\"positionId\":536324,\"createTime\":\"2016-01-11 18:27:09\",\"createTimeStr\":\"2016-01-11 18:27:09\",\"positionName\":\"Java\"}",
						"businessStatus": "SUCCESS",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "684330160039792640",
						"messageId": "684330159901380608",
						"createTime": "2016-01-05 19:06:39",
						"messageTime": "2016-01-05 19:06:38",
						"createTimeStr": "2016-01-05 19:06:39",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "684330346975727616",
						"readTime": "2016-01-05 19:06:39",
						"readTimeStr": "2016-01-05 19:06:39",
						"content": "{\"id\":684330346975727616,\"userId\":1547173,\"companyId\":69362,\"companyLogo\":\"i/image1/M00/00/84/CgHIDlZZbi2AIz_xAAAiG4flbhw227.jpg\",\"companyShortName\":\"B\\u0026nbsp;\\u0026nbsp;端 聊天测试\",\"companyName\":\"iOS B端聊天测试有限公司\",\"positionId\":536307,\"createTime\":\"20160105T190638+0800\",\"createTimeStr\":\"2016-01-05 19:06:38\",\"positionName\":\"java\"}",
						"businessStatus": "READ",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "685663784139886592",
						"messageId": "685663784127303680",
						"createTime": "2016-01-09 11:25:59",
						"messageTime": "2016-01-09 11:25:59",
						"createTimeStr": "2016-01-09 11:25:59",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "685663994664587264",
						"readTime": "2016-01-09 11:25:59",
						"readTimeStr": "2016-01-09 11:25:59",
						"content": "{\"id\":\"685663994664587264\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼你是我的眼\",\"companyName\":\"旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶旺仔牛奶\",\"positionId\":535984,\"createTime\":\"2016-01-09 11:25:59\",\"createTimeStr\":\"2016-01-09 11:25:59\",\"positionName\":\"啊啊啊啊啊啊啊啊啊啊啊啊啊啊\"}",
						"businessStatus": "SUCCESS",
						"isRead": false,
						"isNew": false
					}, {
						"recordId": "685296808099975168",
						"messageId": "685296807982534656",
						"createTime": "2016-01-08 20:13:01",
						"messageTime": "2016-01-08 20:13:01",
						"createTimeStr": "2016-01-08 20:13:01",
						"expireTimeStr": "",
						"messageType": "DELIVER",
						"receiveType": "ALL",
						"readSource": "PC",
						"receiveUserId": 1547173,
						"businessId": "685297002975727616",
						"readTime": "2016-01-08 11:07:45",
						"readTimeStr": "2016-01-08 11:07:45",
						"content": "{\"id\":\"685297002975727616\",\"userId\":1547173,\"companyId\":69313,\"companyLogo\":\"image1/M00/00/38/CgHIilXWxzqABnZXAAAZUBKCc5A506.jpg\",\"companyShortName\":\"你是我的眼\",\"companyName\":\"旺仔牛奶\",\"positionId\":535989,\"createTime\":\"2016-01-08 11:07:45\",\"createTimeStr\":\"2016-01-08 11:07:45\",\"positionName\":\"钱钱钱钱钱钱钱钱钱钱\"}",
						"businessStatus": "REFUSE",
						"isRead": false,
						"isNew": false
					}],
					"totalCount": "52",
					"pageNo": 1
				}
			},
			"rows": []
		},
		"message": "Query success!",
		"state": 1
	});
};

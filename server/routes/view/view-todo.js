'use strict';

// 这句是用于编译jsx的，实现react server side render
// require('babel-register')({
// 	presets: ['es2015', 'react']
// });
// require('../../../client/message/modules/message-content/AllMessage.react');

module.exports = function(router) {
	// 使用artemplate模板渲染
	router.get('/todo/detail.html', function(req, res) {
		var data = {
			list: [{
				value: 'todo1'
			}, {
				value: 'todo2'
			}]
		};
		res.render('art-todo-list/main', data);
	});
	// 使用reactjs渲染
	// TODO 目前有问题，同构渲染时，nodejs编译jsx时总是报错
	router.get('/comment/detail.html', function(req, res) {
		res.render('comment/main', {});
	});
};

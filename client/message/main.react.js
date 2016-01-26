var React = require('../../dep/react/react');
var ReactDOM = require('../../dep/react/react-dom');

var MessageNav = require('./modules/MessageNav.react');
var MessageList = require('./modules/MessageList.react');

var MessageBox = React.createClass({
	render: function() {
		return (<div className = "message-box">
				<MessageNav url="/api/users" />
				<MessageList />
			</div>
		);
	}
});

ReactDOM.render(<div className = "content-left" >
    <div className="left-wrap"> <MessageBox / >
    </div></div>,
	document.getElementById('example')
);
// MessageApp
// Header
// ContainerMain
// -- MessageBox
// 	-- MessageNav
// 	-- MessageList
// 		-- MessageItem
// 		-- Pagination
// ContainerSide
// Footer

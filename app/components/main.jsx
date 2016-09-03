var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<Nav/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// })

var Main = (props) => {
	return (
		<div>
			<Nav/>
			<h2>Main</h2>
			{props.children}
			<p>Welcome to the React Weather App</p>
		</div>
	)
}

module.exports = Main;
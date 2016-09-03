var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
// 	render: function () {
// 		return (
			
// 			<h2>Examples Component</h2>
// 		)
// 	}
// })



var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here area a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Manalapan'>Manalapan</Link>
				</li>
				<li>
					<Link to='/?location=Jersey+City'>Jersey City</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;
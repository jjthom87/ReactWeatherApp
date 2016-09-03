var React = require('react');

var ErrorComponent = React.createClass({
	getDefaultProps: function () {
		return {
			title: 'Error'
		};
	},
	propTypes: {
		//
		title: React.PropTypes.string,
		//makes the message required;
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function () {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function () {
		//calling proptypes error message
		var {title, message} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>Error</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorComponent;
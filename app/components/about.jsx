var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather application built on React. I have built this as part of the Udemy React Course hosted by Andrew Meade</p>
			<p>Here are some of the tools that I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework used
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather App to search for weather.
				</li>
				<li>
					<a href="https://github.com/jjthom87/ReactWeatherApp">Github Repo for App</a> - This is the github repo that I created for this project.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;
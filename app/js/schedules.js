// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

// Include dependency
var Navbar = require('components/navbar.js');

// Implement index page
var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById('react-root')
)

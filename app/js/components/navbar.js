// Include library
var React     = require('react');

// Include dependency
var navbarDt  = require('json/navbar.json');

// Implement navbar banner
var Links = React.createClass({
	render: function() {
		var lang = this.props.lang;
		var lis  = navbarDt.map(function(pages, id) {
			return (
				<li key={id}>
					<a href={pages.url}>
						{pages.text[lang]}
					</a>
				</li>
			);
		});
		return (
			<ul>
				{lis}
			</ul>
		);
	}
});

var Navbar = React.createClass({
	render: function() {
		return (
			<nav role="banner">
				<strong>{"Logo"}</strong>
				<Links lang="en" />
			</nav>
		);
	}
});

module.exports = Navbar;

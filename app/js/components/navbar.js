// Include library
require('lib/arrayExtended.js');
var React     = require('react');

// Include dependency
var navbarDt  = require('json/navbar.json');

// Implement navbar banner
var Links = React.createClass({
	render: function() {
		var lang = this.props.lang;
		var href = window.location.href.split("/").back();
		if( href === '' )
			href = 'index.html';
		var lis  = navbarDt.map(function(pages, id) {
			var active = (href===pages.url)? 'active' : '';
			return (
				<li key={id} className={active}>
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

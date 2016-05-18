// Include library
require('lib/arrayExtended.js');
var React     = require('react');

// Include dependency
var navbarDt  = require('json/navbar.json');
var Bugar     = require('components/bugar.js');

// Implement navbar banner
var LangSwitch = React.createClass({
    getInitialState: function() {
        return {lang: 'zh'};
    },
    handleClickZH: function() {
        this.setState({lang: 'zh'});
    },
    handleClickEN: function() {
        this.setState({lang: 'en'});
    },
    render: function() {
        var zhClass = 'unactive';
        var enClass = 'unactive';
        switch(this.state.lang) {
            case 'zh':
                zhClass = 'active';
                break;
            case 'en':
                enClass = 'active';
        }
        return (
            <nav role="lang-switch">
                <span onClick={this.handleClickZH}
                        className={zhClass}>
                    正體
                </span>
                <span onClick={this.handleClickEN}
                        className={enClass}>
                    EN
                </span>
            </nav>
        );
    }
});

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
                <Bugar />
                <img role="logo" src="images/logo.png" />
                <Links lang="en" />
                <span role="vertical-anchor">{"1"}</span>
                <LangSwitch />
                <div role="clear-float"></div>
            </nav>
        );
    }
});

module.exports = Navbar;

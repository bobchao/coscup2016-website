// Include library
require('lib/arrayExtended.js');
var React     = require('react');
var dom       = require('lib/dom.js');

// Include dependency
var navbarDt  = require('json/navbar.json');
var Bugar     = require('components/bugar.js');
var langStore = require('stores/lang.js');
var resizer   = require('stores/onresize.js');
var scroller  = require('stores/onscroll.js');

// Implement navbar banner
var LangSwitch = React.createClass({
    getInitialState: function() {
        return {lang: langStore.getState()};
    },
    handleClickZH: function() {
        this.setState({lang: 'zh'});
        langStore.setLang('zh');
    },
    handleClickEN: function() {
        this.setState({lang: 'en'});
        langStore.setLang('en');
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
                <span onClick={this.handleClickEN}
                        className={enClass}>
                    EN
                </span>
                <span role="seperator">/</span>
                <span onClick={this.handleClickZH}
                        className={zhClass}>
                    繁體中文
                </span>
            </nav>
        );
    }
});

var Links = React.createClass({
    getInitialState: function() {
        return {lang: langStore.getState(), top: scroller.top()};
    },
    changeHandler: function() {
        this.setState({lang: langStore.getState()});
    },
    scrollHandler: function() {
        this.setState({top: scroller.top()});
    },
    componentDidMount: function() {
        langStore.register(this.changeHandler);
        scroller.register(this.scrollHandler);
    },
    render: function() {
        var lang = this.state.lang;
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
                    <div role="green-bar"></div>
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
    coculateHeight: function() {
        return (resizer.windowWidth()*0.3) + 'px';
    },
    getInitialState: function() {
        return {height: this.coculateHeight()};
    },
    resizeHandler: function() {
        this.setState({height: this.coculateHeight()});
    },
    componentDidMount: function() {
        resizer.register(this.resizeHandler);
    },
    render: function() {
        var style = {height: this.state.height};
        return (
            <nav role="banner" style={style}>
                <section role="page-links">
                    <Bugar />
                    <Links />
                </section>
                <LangSwitch />
                <div role="clear-float"></div>
            </nav>
        );
    }
});

module.exports = Navbar;

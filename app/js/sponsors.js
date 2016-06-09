// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');
var Remarkable= require('remarkable');

// Include dependency
var Navbar    = require('components/navbar.js');
var Footer    = require('components/footer.js');
var langStore = require('stores/lang.js');
var loader    = require('dataloaders/sponsor.js');

function markup(text) {
    var md       = new Remarkable();
    var markdown = md.render(text);
    return { __html: markdown};
}


// Implement index page
var Sponsor = React.createClass({
    render: function() {
        var data = this.props.data;
        var lang = this.props.lang;
        var markdown = markup(data.description[lang]);
        return (
            <section role="sponsor">
                <div role="sponsor-logo">
                    <a href={data.url}>
                        <img src={data.logoUrl} />
                    </a>
                </div>
                <div role="sponsor-text">
                    <header>{data.name[lang]}</header>
                    <article dangerouslySetInnerHTML={markdown} />
                </div>
                <div role="clear-float"></div>
            </section>
        );
    }
});

var SponsorClass = React.createClass({
    render: function() {
        var data     = this.props.data;
        var lang     = this.props.lang;
        var sponsors = data.sponsors.map(function(sponsor, idx) {
            return (
                <Sponsor
                    key={idx} 
                    data={sponsor}
                    lang={lang} />
            );
        });
        return (
            <section role="sponsor-class">
                <header>{data.className[lang]}</header>
                {sponsors}
            </section>
        );
    }
});

var Sponsorlist = React.createClass({
    getInitialState: function() {
        return {lang: langStore.getState(), loaded: false};
    },
    changeHandler: function() {
        this.setState({lang: langStore.getState()});
    },
    onloadHandler: function() {
        this.setState({loaded: true});
    },
    componentDidMount: function() {
        langStore.register(this.changeHandler);
        loader.register(this.onloadHandler);
    },
    render: function() {
        var datas  = loader.getData();
        var lang   = this.state.lang;
        var levels = datas.map(function(level, idx) {
            return (
                <SponsorClass
                    key={idx} 
                    data={level}
                    lang={lang} />
            );
        });
        return (
            <section role="sponsor-list">
                {levels}
            </section>
        );
    }
});

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar />

                <Sponsorlist />

                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('react-root')
)

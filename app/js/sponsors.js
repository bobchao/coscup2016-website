// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');
var Remarkable= require('remarkable');
var ajax      = require('superagent');

// Include dependency
var Navbar    = require('components/navbar.js');
var Footer    = require('components/footer.js');
var langStore = require('stores/lang.js');
var loader     = require('dataloaders/sponsor.js');

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
        return {lang: langStore.getState(), datas: [], sponsor: [], sponsorclass: []};
    },
    changeHandler: function() {
        this.setState({lang: langStore.getState()});
    },
    componentDidMount: function() {
        langStore.register(this.changeHandler);
        var O = this;
        ajax.get('./json/sponsor.json')
            .end(function(err, res1){
                ajax.get('./json/sponsor-class.json')
                    .end(function(err, res2){
                            O.setState({datas: loader.equilJoin(JSON.parse(res2.text), JSON.parse(res1.text))});
                    }.bind(this));
            }.bind(this));
    },
    render: function() {
        var lang   = this.state.lang;
        console.log(this.state.datas);
        var levels = this.state.datas.map(function(level, idx) {
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

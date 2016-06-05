// Include library
var React     = require('react');

// Include dependency
var getData   = require('dataloaders/sponsor.js').getType;
var langStore = require('stores/lang.js');

// Implement
var Sponsor = React.createClass({
    render: function() {
        var dt   = this.props.dt;
        var lang = this.props.lang;
        return (
            <div role="sponsor">
                <a href={dt.url} target="_blank">
                    <img src={dt.logoUrl} />
                </a>
                <p>{dt.name[lang]}</p>
            </div>
        )
    }
});

var SponsorClass = React.createClass({
    getInitialState: function() {
        return {lang: langStore.getState()};
    },
    changeHandler: function() {
        this.setState({lang: langStore.getState()});
    },
    componentDidMount: function() {
        langStore.register(this.changeHandler);
    },
    render: function() {
        var data     = getData(this.props.role);
        var lang     = this.state.lang;
        var sponsors = data.sponsors.map((dt,id) => {
            return <Sponsor key={id} dt={dt} lang={lang} />
        });
        return (
            <section role={this.props.role}>
                <header role="sponsor-class">
                    {data.className[lang]}
                </header>
                {sponsors}
            </section>
        );
    }
});

var FooterSponsor = React.createClass({
    render: function() {
        return (
            <section role="footer-sponsor">
                <SponsorClass role="diamon" />
                <SponsorClass role="golden" />
            </section>
        );
    }
});

module.exports = FooterSponsor;

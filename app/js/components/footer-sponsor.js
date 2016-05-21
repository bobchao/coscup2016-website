// Include library
var React     = require('react');

// Include dependency
var getData   = require('dataloaders/sponsor.js');
var langStore = require('stores/lang.js');

// Implement
var Sponsor = React.createClass({
    render: function() {
        var dt = this.props.dt;
        return (
            <div role="sponsor">
                <a href={dt.url} target="_blank">
                    <img src={dt.logoUrl} />
                </a>
                <p>{dt.name}</p>
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
            return <Sponsor key={id} dt={dt} />
        });
        return (
            <section role={this.props.role}>
                <header role="sponsor-class">{data.className[lang]}</header>
                {sponsors}
            </section>
        )
    }
});

var FooterSponsor = React.createClass({
    render: function() {
        return (
            <section role="footer-sponsor">
                <SponsorClass role="golden" />
                <SponsorClass role="silver" />
            </section>
        );
    }
});

module.exports = FooterSponsor;

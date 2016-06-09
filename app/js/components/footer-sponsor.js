// Include library
var React     = require('react');

// Include dependency
var loader    = require('dataloaders/sponsor.js');
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
        var data     = this.props.data;
        var lang     = this.state.lang;
        var sponsors = data.sponsors.map((dt,id) => {
            return <Sponsor key={id} dt={dt} lang={lang} />
        });
        return (
            <section>
                <header role="sponsor-class">
                    {data.className[lang]}
                </header>
                {sponsors}
            </section>
        );
    }
});

var FooterSponsor = React.createClass({
    getInitialState: function() {
        return {loaded: false};
    },
    onloadHandler: function() {
        this.setState({loaded: true});
    },
    componentDidMount: function() {
        loader.register(this.onloadHandler);
    },
    render: function() {
        var datas   = loader.getData();
        var spnsCls = datas.map((dt, id) => {
            return (<SponsorClass key={id} data={dt} />)
        });
        return (
            <section role="footer-sponsor">
                {spnsCls}
            </section>
        );
    }
});

module.exports = FooterSponsor;

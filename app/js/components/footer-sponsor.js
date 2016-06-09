// Include library
var React     = require('react');
var ajax      = require('superagent');

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
        return {lang: langStore.getState(), datas: []};
    },
    changeHandler: function() {
        this.setState({lang: langStore.getState()});
    },
    componentDidMount: function() {
        langStore.register(this.changeHandler);
        O = this;
        ajax.get('./json/sponsor.json')
            .end(function(err, res1){
                ajax.get('./json/sponsor-class.json')
                    .end(function(err, res2){
                            O.setState({datas: loader.equilJoin(JSON.parse(res2.text), JSON.parse(res1.text))});
                    }.bind(this));
            }.bind(this));
    },
    render: function() {
        var data     = this.state.datas[loader.alias[this.props.role]];
        if(data === undefined){
            data = {
                sponsors: [],
                className: {
                    en: "",
                    zh: ""
                }
            }
        }
        console.log(this.props.role);
        var lang     = this.state.lang;
        var sponsors = data.sponsors.map((dt,id) => {
            return <Sponsor key={id} dt={dt} lang={lang} />
        });
        return (<section role={this.props.role}>
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

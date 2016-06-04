// Include library
require('lib/arrayExtended.js');
var React     = require('react');

// Include dependency
var TransportJsonDt  = require('json/transport.json');
var langStore = require('stores/lang.js');

// Implement navbar banner
var TransportMap = React.createClass({
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
        var lang = this.state.lang;
        var lis  = TransportJsonDt.transport.map(function(transport, id) {
            return (
                <section>
                    <h3>{transport.title[lang]}</h3>
                    <div>{transport.content[lang]}</div>
                </section>
            );
        });
        return (
            <div>
                <div>
                    <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
                        src="http://www.openstreetmap.org/export/embed.html?bbox=121.60438299179079%2C25.0365578919576%2C121.6185450553894%2C25.045461759833863&amp;layer=mapnik&amp;marker=25.041009906698907%2C121.61146402359009" >
                    </iframe>
                </div>
                <div>
                    <section>
                        <h3>{TransportJsonDt.location.title[lang]}</h3>
                        <div>{TransportJsonDt.location.content[lang]}</div>
                    </section>
                    <section>
                        <h3>{TransportJsonDt.address.title[lang]}</h3>
                        <div>{TransportJsonDt.address.content[lang]}</div>
                    </section>
                    <section>
                        <h3>{TransportJsonDt.suggestion[lang]}</h3>
                    </section>
                    {lis}
                </div>
            </div>
        );
    }
});

module.exports = TransportMap;

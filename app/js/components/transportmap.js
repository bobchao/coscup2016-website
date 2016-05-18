// Include library
require('lib/arrayExtended.js');
var React     = require('react');

var TransportMap = React.createClass({
    render: function() {
        return (
            <div>
                <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
                    src="http://www.openstreetmap.org/export/embed.html?bbox=121.60438299179079%2C25.0365578919576%2C121.6185450553894%2C25.045461759833863&amp;layer=mapnik&amp;marker=25.041009906698907%2C121.61146402359009" >
                </iframe>
                <br/>
                <small>
                    <a href="http://www.openstreetmap.org/?mlat=25.04101&amp;mlon=121.61146#map=17/25.04101/121.61146&amp;layers=N">查看更大的地圖</a>
                </small>
            </div>
        );
    }
});

module.exports = TransportMap;

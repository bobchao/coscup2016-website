var React     = require('react');

var Seperator = React.createClass({
    render: function() {
        return (
            <img role="seperator" 
                 src="images/divider.svg"/>
        );
    }
});

module.exports = Seperator;

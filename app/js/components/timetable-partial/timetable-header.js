// Include library
var React     = require('react');

// Implement index page
var Header = React.createClass({
    render: function() {
        return (
            <header role="timetable-header">
                <strong role="time-col">08/20</strong>
                {this.props.children}
            </header>
        );
    }
});

module.exports = Header;

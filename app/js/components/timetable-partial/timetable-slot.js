// Include library
require('lib/arrayExtended.js');
var React     = require('react');

// Implement index page
var Slot = React.createClass({
    render: function() {
        var colSpan = this.props.colSpan || 1;
        var types   = this.props.data.type || [];
        if( !types.isArray )
            types   = [types];
        var tags = types.map((ele) => {
            return (<span role="tag">{ele}</span>);
        });
        return (
            <td colSpan={colSpan} role="timetable-slot">
                <header>
                    {this.props.data.subject}
                </header>
                <footer>
                    {this.props.data.speakername}
                </footer>
                <span>tag1</span>
                <span>tag1</span>
            </td>
        );
    }
});

module.exports = Slot;

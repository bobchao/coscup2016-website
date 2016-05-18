// Include library
require('lib/arrayExtended.js');
var React = require('react');

var Bugar = React.createClass({
    getInitialState: function() {
        return {
            open: this.props.initState || false
        };
    },
    handleClick: function() {
        this.setState({open: !this.state.open});
    },
    render: function() {
        // Class, active/unactive, 
        // could not only let css change bugar style,
        // but others could use sibling selector to change their style
        // ex: rwd menu could use this switch between open/close
        var state = this.state.open? 'active' : 'unactive';
        return (
            <nav role="bugar-button"
                    className={state}
                    onClick={this.handleClick}>
                <li role="bugar-top-bread"></li>
                <li role="bugar-ham">      </li>
                <li role="bugar-btn-bread"></li>
            </nav>
        );
    }
});

module.exports = Bugar;

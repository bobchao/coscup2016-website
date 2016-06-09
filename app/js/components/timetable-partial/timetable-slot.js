// Include library
var React     = require('react');

// Include dependency
require('lib/arrayExtended.js');
var langStore = require('stores/lang.js');
var typeStore   = require('stores/timetable-filter.js');
var tagName = typeStore.type;

// Implement index page
var Slot = React.createClass({
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
        var lang    = this.state.lang;
        var colSpan = this.props.colSpan || 1;
        var rowSpan = this.props.rowSpan || 1;

        // Process tags
        if( !this.props.data )
            return (<td></td>);
        var types   = this.props.data.type || [];
        if( !types.isArray )
            types   = [types];
        var tags    = types.map((ele) => {
            return (
                <span role="tag" className={"tag-"+tagName(ele)}>
                    {tagName(ele)['name'+lang]}
                </span>
            );
        });
        if( this.props.data.lang === "EN" )
            tags.push(<span role="tag" className="tag-EN">EN</span>);

        return (
            <td colSpan={colSpan} rowSpan={rowSpan} role="timetable-slot">
                <header>
                    {this.props.data.subject}
                </header>
                <footer>
                    {this.props.data.speakername}
                </footer>
                {tags}
            </td>
        );
    }
});

module.exports = Slot;

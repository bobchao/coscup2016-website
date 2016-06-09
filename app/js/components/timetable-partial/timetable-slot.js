// Include library
var React     = require('react');

// Include dependency
require('lib/arrayExtended.js');
var popup     = require('stores/popup-page.js');
var langStore = require('stores/lang.js');
var typeStore = require('stores/timetable-filter.js');
var tagName   = typeStore.type;

// Implement index page
var Slot = React.createClass({
    needActive: function() {
        if( !this.props.data )
            return false;
        if( typeStore.filter(-1) )
            return true;
        var types = this.props.data.type || [];
        if( !types.isArray )
            types   = [types];
        for(var tp of types)
            if( typeStore.filter(tp) )
                return true;
        return false;
    },
    getInitialState: function() {
        return {
            lang: langStore.getState(),
            active: this.needActive()
        };
    },
    clickHandler: function() {
        popup.show('');
    },
    langChangeHandler: function() {
        this.setState({lang: langStore.getState()});
    },
    filterChangeHandler: function() {
        this.setState({active: this.needActive()});
    },
    componentDidMount: function() {
        langStore.register(this.langChangeHandler);
        typeStore.filterChangeRegister(this.filterChangeHandler);
    },
    render: function() {
        var lang    = this.state.lang;
        var colSpan = this.props.colSpan || 1;
        var rowSpan = this.props.rowSpan || 1;
        var cls     = (this.state.active)? '' : 'unactive';

        // Process tags
        if( !this.props.data )
            return (<td role="empty-slot"></td>);
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
            <td role="timetable-slot" className={cls}
                colSpan={colSpan} rowSpan={rowSpan}
                onClick={this.clickHandler}>
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

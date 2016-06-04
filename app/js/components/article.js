// Include library
var React     = require('react');

// Include dependency
var langStore = require('stores/lang.js');

// Implement
var Article = React.createClass({
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
        var p = this.props.data.map(function(dt, id) {
            return (<p key={id}>{dt}</p>)
        });
        return (
            <article role="paragraphs">
                {p}
            </article>
        );
    }
});

module.exports = Article;

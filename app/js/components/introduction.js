// Include library
var React     = require('react');

// Include dependency
var textIntro = require('json/introduction.json');
var langStore = require('stores/lang.js');

// Implement index page introduction
var Introduction = React.createClass({
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
        return (
            <article role="self-introduction">
                {textIntro[lang]}
            </article>
        );
    }
});

module.exports = Introduction;

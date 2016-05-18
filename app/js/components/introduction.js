// Include library
var React     = require('react');

// Include dependency
var textIntro = require('json/introduction.json');

// Implement index page introduction
var Introduction = React.createClass({
    getInitialState: function() {
        return {
            lang: 'en'
        };
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

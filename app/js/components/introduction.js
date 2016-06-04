// Include library
var React     = require('react');

// Include dependency
var textIntro = require('json/index-page.json');
var langStore = require('stores/lang.js');
var Seperator = require('components/seperator.js');
var Article   = require('components/article.js');

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
            <section role="index-body">

                <article role="important-info">
                    <strong>{"2016/8/20(五) - 2016/8/21(六)"}</strong>
                    <p>{"中央研究院 人文社會科學館"}</p>
                    <p>{"Activity Center & HSSB Academia Sinica"}</p>
                </article>

                <Seperator />

                <Article data={textIntro[lang]} />

                <Seperator />
                
            </section>
        );
    }
});

module.exports = Introduction;

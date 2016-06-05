// Include library
var React     = require('react');

// Include dependency
var pageText  = require('json/index-page.json');
var langStore = require('stores/lang.js');
var Seperator = require('components/seperator.js');
var Article   = require('components/article.js');

var Activity  = React.createClass({
    render: function() {
        var lContent = [];
        var rContent = [];
        if( this.props.left ) {
            lContent.push(<h2>{this.props.left.title}</h2>);
            lContent.push(<p>{this.props.left.article}</p>);
            lContent.push(  <a role="link-btn"
                               href={this.props.left.url}>
                                {this.props.left.btn}
                            </a>);
        }
        if( this.props.right ) {
            rContent.push(<h2>{this.props.right.title}</h2>);
            rContent.push(<p>{this.props.right.article}</p>);
            rContent.push(  <a role="link-btn"
                               href={this.props.right.url}>
                                {this.props.right.btn}
                            </a>);
        }
        return (
            <section role="activity-gate">
                <article role="left">
                    {lContent}  
                </article>
                <article role="right">
                    {rContent}
                </article>
                <div role="clear-float"></div>
            </section>
        );
    }
});

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
        var introduction = pageText.introduction[lang];
        var activitys    = pageText.activity[lang];
        var activitysRow = [];
        var idx = 0;
        while( idx<activitys.length ) {
            if( idx+1 < activitys.length )
                activitysRow.push(
                    <Activity key={lang + idx}
                        left ={activitys[idx]}
                        right={activitys[idx+1]}/>
                );
            else
                activitysRow.push(
                    <Activity key={lang + idx}
                        left ={activitys[idx]}/>
                );
            idx += 2;
        }
        return (
            <section role="index-body">

                <article role="important-info">
                    <strong>{"2016/8/20(五) - 2016/8/21(六)"}</strong>
                    <p>{"中央研究院 人文社會科學館"}</p>
                    <p>{"Activity Center & HSSB Academia Sinica"}</p>
                </article>

                <Seperator />

                {activitysRow}

                <Seperator />

                <Article data={introduction} />

                <Seperator />
                
            </section>
        );
    }
});

module.exports = Introduction;

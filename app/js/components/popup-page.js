// Include library
var React    = require('react');
var ReactDOM = require('react-dom');

// Define popup&close panel process
var store = require('stores/popup-page.js');

// Implement index page
var Popup = React.createClass({
    getInitialState: function() {
        return {content: null, cls: ''};
    },
    closeHandler: function() {
        store.close();
    },
    proc0: function() {
        this.setState({
            content: null,
            cls    : ''
        });
    },
    proc1: function() {
        this.setState({
            content: store.getContent(),
            cls    : 'state1'
        });
    },
    proc2: function() {
        this.setState({
            content: store.getContent(),
            cls    : 'state2'
        });
    },
    proc3: function() {
        this.setState({
            content: store.getContent(),
            cls    : 'state3'
        });
    },
    componentDidMount: function() {
        store.addStep(this.proc0, 20);
        store.addStep(this.proc1, 20);
        store.addStep(this.proc2, 300);
        store.addStep(this.proc3, 300);
    },
    render: function() {
        var htmlContent = {__html: this.state.content};
        return (
            <div>
                <div role="popup-bg" onClick={this.closeHandler}
                     className={this.state.cls} />
                <div role="popup-page" className={this.state.cls}>
                    <span role="popup-X" onClick={this.closeHandler}>X</span>
                    <div role="popup-content" dangerouslySetInnerHTML={htmlContent} />
                </div>
            </div>
        );
    }
});

module.exports = Popup;

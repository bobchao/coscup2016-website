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
        document.body.style.overflowY = 'scroll';
        this.setState({
            content: store.getContent(),
            cls    : 'state1'
        });
    },
    proc2: function() {
        document.body.style.overflowY = 'hidden';
        this.setState({
            content: store.getContent(),
            cls    : 'state2'
        });
    },
    componentDidMount: function() {
        store.addStep(this.proc0, 0);
        store.addStep(this.proc1, 0);
        store.addStep(this.proc2, 500);
    },
    render: function() {
        return (
            <div role="popup-page" ref="container"
                className={this.state.cls}>
                <span role="popup-X" onClick={this.closeHandler}>X</span>
                {this.state.content}
            </div>
        );
    }
});

module.exports = Popup;

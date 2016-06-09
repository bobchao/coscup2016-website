var React     = require('react');

var Content = React.createClass({
    render: function() {
        var data = this.props.data || {};
        return (
            <section role="timetable-popup-content">
                <header>
                    <strong>{data.speakername}</strong>
                    <article>{data.speakerintro}</article>
                </header>
                <footer>
                    <strong>{data.subject}</strong>
                    <article>{data.abstract}</article>
                </footer>
            </section>
        );
    }
});

module.exports = Content;

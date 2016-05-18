// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

// Include dependency
var Navbar       = require('components/navbar.js');
var TransportMap = require('components/transportmap.js')
var Footer       = require('components/footer.js');;

// Implement index page
var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar />
                <TransportMap />
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('react-root')
)

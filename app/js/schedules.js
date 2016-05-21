// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

// Include dependency
var Navbar   = require('components/navbar.js');
var Sponsors = require('components/footer-sponsor.js');
var Footer   = require('components/footer.js');

// Implement index page
var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar   />
                <Sponsors />
                <Footer   />
            </div>
        );
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('react-root')
)

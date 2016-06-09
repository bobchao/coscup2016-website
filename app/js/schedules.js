// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

// Include dependency
var Navbar    = require('components/navbar.js');
var Seperator = require('components/seperator.js');
var Timetable = require('components/timetable.js');
var Sponsors  = require('components/footer-sponsor.js');
var Footer    = require('components/footer.js');
var Popup     = require('components/popup-page.js');

// Implement index page
var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar   />

                <Timetable />

                <Seperator />
                
                <Sponsors />
                <Footer   />

                <Popup />
            </div>
        );
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('react-root')
)

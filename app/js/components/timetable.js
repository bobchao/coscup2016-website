// Include library
var React     = require('react');
var ReactDOM  = require('react-dom');

// Include dependency
var TimetableHSSB   = require('components/timetable-partial/timetable-hssb.js');
var TimetableGYM    = require('components/timetable-partial/timetable-gym.js');
var TimetableFilter = require('components/timetable-partial/timetable-filter.js');
var typeStore       = require('stores/timetable-filter.js');

// Processing data
var roomData = require('json/room.json');
var timeData = require('json/time.json');
var progData = require('json/program.json');

var hssbData = {};
var gymData  = {};
progData.forEach((ele) => {
    if( ele.slot[0] == "K" ) {
        hssbData[ele.slot] = ele;
        gymData [ele.slot] = ele;
    }
    else if( ele.room=="R0" ||
        ele.room=="R1" ||
        ele.room=="R2" )
        hssbData[ele.slot] = ele;
    else
        gymData [ele.slot] = ele;
});

var hssbRoom = {};
var gymRoom  = {};
roomData.forEach((ele) => {
    if( ele.room=="R0" ||
        ele.room=="R1" ||
        ele.room=="R2" )
        hssbRoom[ele.room] = {
            nameen: ele.room,
            namezh: ele.name
        }
    else
        gymRoom[ele.room]  = {
            nameen: ele.room,
            namezh: ele.name
        }
});

// Implement index page
var Timetable = React.createClass({
    changeHandler: function(nowPlace) {
        if( nowPlace==1 ) {
            ReactDOM.findDOMNode(this.refs.gym) .style.display = 'block';
            ReactDOM.findDOMNode(this.refs.hssb).style.display = 'none';
        }
        else {
            ReactDOM.findDOMNode(this.refs.gym) .style.display = 'none';
            ReactDOM.findDOMNode(this.refs.hssb).style.display = 'block';
        }
    },
    componentDidMount: function() {
        typeStore.placeChangeRegister(this.changeHandler);
        this.changeHandler(typeStore.nowPlace());
    },
    render: function() {
        return (
            <section role="timetable">
                <TimetableFilter />
                <TimetableHSSB ref="hssb"
                    data={hssbData}
                    timeData={timeData}
                    roomData={hssbRoom} />
                <TimetableGYM  ref="gym"
                    data={gymData} 
                    timeData={timeData}
                    roomData={gymRoom} />
            </section>
        );
    }
});

module.exports = Timetable;

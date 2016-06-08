// Include library
var React     = require('react');

// Include dependency
var TimetableHSSB   = require('components/timetable-partial/timetable-hssb.js');
var TimetableGYM    = require('components/timetable-partial/timetable-gym.js');
var TimetableFilter = require('components/timetable-partial/timetable-filter.js');

// Processing data
var roomData = require('json/room.json');
var timeData = require('json/time.json');
var progData = require('json/program.json');

var hssbData = {};
var gymData  = {};
progData.forEach((ele) => {
    if( ele.room=="R0" ||
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
    render: function() {
        return (
            <section role="timetable">
                <TimetableFilter />
                <TimetableHSSB
                    data={hssbData}
                    timeData={timeData}
                    roomData={hssbRoom} />
                <TimetableGYM 
                    data={gymData} 
                    timeData={timeData}
                    roomData={gymRoom} />
            </section>
        );
    }
});

module.exports = Timetable;

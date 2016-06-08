// Include library
var React     = require('react');

// Include dependency
var TimetableHSSB   = require('components/timetable-partial/timetable-hssb.js');
var TimetableGYM    = require('components/timetable-partial/timetable-gym.js');
var TimetableFilter = require('components/timetable-partial/timetable-filter.js');

var timeData = require('json/time.json');
var progData = require('json/program.json');
var hssbData = [];
var gymData  = [];
progData.forEach((ele) => {
    if( ele.room=="R0" ||
        ele.room=="R1" ||
        ele.room=="R2" )
        hssbData.push(ele);
    else
        gymData .push(ele);
});

// Implement index page
var Timetable = React.createClass({
    render: function() {
        return (
            <section role="timetable">
                <TimetableHSSB data={hssbData} timeData={timeData[0]} />
                <TimetableGYM data={gymData} timeData={timeData[1]} />
                <TimetableFilter />
            </section>
        );
    }
});

module.exports = Timetable;

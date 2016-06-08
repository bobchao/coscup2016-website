// Include library
var React     = require('react');

// Include dependency
var Header = require('components/timetable-partial/timetable-header.js');
var Slot   = require('components/timetable-partial/timetable-slot.js');

var Tbody = React.createClass({
    render: function() {
        var data = {};
        var time = this.props.timeData;
        this.props.data.forEach((ele) => {
            data[ele.slot] = ele;
        });
        return (
            <tbody>
                <tr>
                    <td role="time-col">{time[0]}</td>
                    <td colSpan="3">Opening</td>
                </tr>
                <tr>
                    <td role="time-col">{time[1]}</td>
                    <Slot colSpan="3" data={data["K0"]} />
                </tr>
                <tr>
                    <td role="time-col">{time[2]}</td>
                    <Slot data={data["R01"]} />
                    <Slot data={data["R11"]} />
                    <Slot data={data["R21"]} />
                </tr>
                <tr>
                    <td role="time-col">{time[3]}</td>
                    <Slot data={data["R02"]} />
                    <Slot data={data["R12"]} />
                    <Slot data={data["R22"]} />
                </tr>
                <tr>
                    <td role="time-col">{time[4]}</td>
                    <Slot data={data["R03"]} />
                    <Slot data={data["R13"]} />
                    <Slot data={data["R23"]} />
                </tr>
                <tr>
                    <td role="time-col">{time[5]}</td>
                    <Slot data={data["R04"]} />
                    <Slot data={data["R14"]} />
                    <Slot data={data["R24"]} />
                </tr>
                <tr>
                    <td role="time-col">{time[6]}</td>
                    <Slot data={data["R05"]} />
                    <Slot data={data["R15"]} />
                    <Slot data={data["R25"]} />
                </tr>
                <tr>
                    <td role="time-col">{time[7]}</td>
                    <Slot colSpan="3" data={data["K1"]} />
                </tr>
                <tr>
                    <td role="time-col">{time[8]}</td>
                    <td colSpan="3">Lighting Talk</td>
                </tr>
                <tr>
                    <td role="time-col">{time[9]}</td>
                    <td colSpan="3">BoF Announcement</td>
                </tr>
            </tbody>
        );
    }
});

// Implement index page
var TimetableHSSB = React.createClass({
    render: function() {
        return (
            <div role="timetabel-body">
                <Header />
                <table role="timetabel-hssb">
                    <Tbody data={this.props.data} 
                           timeData={this.props.timeData} />
                </table>
            </div>
        );
    }
});

module.exports = TimetableHSSB;

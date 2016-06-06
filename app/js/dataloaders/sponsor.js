// This module responsible for convert api data
// to our front-end needed format.

var slotData = require('json/sponsor-class.json');
var spnsData = require('json/sponsor.json');
var alias    = {
    "diamon"  : 0,
    "golden"  : 1,
    "silver"  : 2,
    "bronze"  : 3,
    "cohost"  : 4,
    "special" : 5,
    "personal": 6
};

function equilJoin() {
    var ret = [];
    slotData.map(function(ele) {
        ret[ele.level] = {
            "className": {
                "en": ele.nameen,
                "zh": ele.namezh
            },
            "sponsors": []
        };
    });
    spnsData.map(function(ele) {
        ret[ele.level].sponsors.push({
            "place": ele.place,
            "name": {
                "en": ele.nameen,
                "zh": ele.namezh
            },
            "url": ele.logolink,
            "logoUrl": ele.logourl,
            "description": {
                "en": ele.introen,
                "zh": ele.introzh
            }
        });
    });
    ret.forEach(function(ele) {
        ele.sponsors.sort(function(a, b) {
            return a.place > b.place;
        });
    });
    return ret;
}

var apiData = equilJoin();

module.exports = {
    getType: function(type) {
        if( typeof apiData[alias[type]] === 'undefined' ) {
            console.error('Sponsor type undefined');
            return;
        }
        return apiData[alias[type]];
    },
    getAll: function() {
        return apiData;
    }
};

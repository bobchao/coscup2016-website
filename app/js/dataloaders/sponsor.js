// This module responsible for convert api data
// to our front-end needed format.

// If saddly the api spec not same as below,
// we would need api parser to convert to below format.
var alias    = {
    "diamon"  : 0,
    "golden"  : 1,
    "silver"  : 2,
    "bronze"  : 3,
    "cohost"  : 4,
    "special" : 5,
    "personal": 6
};
var slotData = [
    {
        "level": 0,
        "nameen": "Diamond Level",
        "namezh": "鑽石級贊助"
    },
    {
        "level": 1,
        "nameen": "Golden level",
        "namezh": "金級贊助"
    }
 ];
var spnsData = [
    {
        "level": 0,
        "place": 0,
        "logolink": "http://example.com/",
        "logourl": "/images/sponsors/test.png",
        "nameen": "Sample",
        "namezh": "樣品",
        "introen": "Hello world",
        "introzh": "你好世界"
    },
    {
        "level": 0,
        "place": 1,
        "logolink": "http://example.com/",
        "logourl": "/images/sponsors/test.png",
        "nameen": "Sample",
        "namezh": "樣品",
        "introen": "Hello world",
        "introzh": "你好世界"
    },
    {
        "level": 1,
        "place": 0,
        "logolink": "http://example.com/",
        "logourl": "/images/sponsors/test.png",
        "nameen": "Sample",
        "namezh": "樣品",
        "introen": "Hello world",
        "introzh": "你好世界"
    },
    {
        "level": 1,
        "place": 1,
        "logolink": "http://example.com/",
        "logourl": "/images/sponsors/test.png",
        "nameen": "Sample",
        "namezh": "樣品",
        "introen": "Hello world",
        "introzh": "你好世界"
    },
    {
        "level": 1,
        "place": 2,
        "logolink": "http://example.com/",
        "logourl": "/images/sponsors/test.png",
        "nameen": "Sample",
        "namezh": "樣品",
        "introen": "Hello world",
        "introzh": "你好世界"
    },
    {
        "level": 1,
        "place": 3,
        "logolink": "http://example.com/",
        "logourl": "/images/sponsors/test.png",
        "nameen": "Sample",
        "namezh": "樣品",
        "introen": "Hello world",
        "introzh": "你好世界"
    },
    {
        "level": 1,
        "place": 4,
        "logolink": "http://example.com/",
        "logourl": "/images/sponsors/test.png",
        "nameen": "Sample",
        "namezh": "樣品",
        "introen": "Hello world",
        "introzh": "你好世界"
    }
];

var apiData = [
    {
        "className" : {
            "en": "Golden",
            "zh": ""
        },
        "sponsors"  : [
            {
                "key"        : 1,
                "name"       : "gold 1",
                "url"        : "",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            }
        ]
    }
];

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
            return a.place < b.place;
        });
    });
    return ret;
}

apiData = equilJoin();

module.exports = function(type) {
    if( typeof apiData[alias[type]] === 'undefined' ) {
        console.error('Sponsor type undefined');
        return;
    }
    return apiData[alias[type]];
};

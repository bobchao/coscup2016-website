// This module responsible for convert api data
// to our front-end needed format.

// If saddly the api spec not same as below,
// we would need api parser to convert to below format.
var apiData = {
    "golden": {
        "className" : {
            "en": "Golden",
            "zh": "金級"
        },
        "sponsors"  : [
            {
                "key"        : 1,
                "name"       : "gold 1",
                "url"        : "",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            },
            {
                "key"        : 2,
                "name"       : "gold 2",
                "url"        : "http://sitcon.camp/2015/",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            }
        ]
    },
    "silver": {
        "className" : {
            "en": "Silver",
            "zh": "銀級"
        },
        "sponsors"  : [
            {
                "key"        : 1,
                "name"       : "silver 1",
                "url"        : "http://sitcon.camp/2015/",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            },
            {
                "key"        : 2,
                "name"       : "silver 2",
                "url"        : "",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            },
            {
                "key"        : 3,
                "name"       : "silver 3",
                "url"        : "",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            },
            {
                "key"        : 4,
                "name"       : "silver 4",
                "url"        : "http://sitcon.camp/2015/",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            },
            {
                "key"        : 5,
                "name"       : "silver 5",
                "url"        : "http://sitcon.camp/2015/",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            }
        ]
    },
    "bronze": {},
    "co-org": {},
    "media" : {},
    "self"  : {}
};

function dataloader(type) {
    if( typeof apiData[type] === 'undefined' ) {
        console.error('Sponsor type undefined');
        return;
    }
    return apiData[type];
}

module.exports = dataloader;

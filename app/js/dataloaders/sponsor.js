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
                "name"       : "test 1",
                "logoUrl"   : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            },
            {
                "key"        : 2,
                "name"       : "test 2",
                "logoUrl"    : "images/sponsors/test.png",
                "description": ["p1", "p2"]
            }
        ]
    },
    "silver": {},
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

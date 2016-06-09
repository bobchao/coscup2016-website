var alias    = {
    "diamon"  : 0,
    "golden"  : 1,
    "silver"  : 2,
    "bronze"  : 3,
    "cohost"  : 4,
    "special" : 5,
    "personal": 6
};
function equilJoin(slotData, spnsData) {
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
module.exports = {
    equilJoin: equilJoin,
    alias: alias
}

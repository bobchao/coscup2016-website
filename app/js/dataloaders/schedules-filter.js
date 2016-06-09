var ajax     = require('superagent');
var types     = {};
var loaded    = false;

var callbacks = [];

ajax.get('http://coscup.org/2016-assets/json/type.json')
    .end(function(err, res) {
        var typesData = JSON.parse(res.text);
        typesData.forEach((ele) => {
            types[ele.type] = ele;
        });
        for(var callback of callbacks)
            callback();
    }.bind(this));

module.exports = {
    getTypes: function() {
        return types;
    },
    register: function(callback) {
        if( loaded )
            callback();
        else
            callbacks.push(callback);
    }
};

// Include library
var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

// map id to tag info
var typesData = require('json/type.json');
var types    = [];
typesData.forEach((ele) => {
    types[ele.type] = ele;
});

var sieve  = [];
var cnt    = 0;

var store = assign({}, EventEmitter.prototype, {
    filter: function(id) {
        if( cnt==0 ) return true;
        if( typeof sieve[id] === 'undefined' )
            return false;
        return sieve[id];
    },
    type: function(id) {
        return types[id];
    },


    register: function(callback) {
        this.on('change', callback);
    },
    unregister: function(callback) {
        this.removeListener('change', callback);
    }
});

module.exports = store;

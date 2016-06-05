// Include library
var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var store = assign({}, EventEmitter.prototype, {
    windowWidth: function() {
        return window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
    },
    windowHeight: function() {
        return window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
    },

    register: function(callback) {
        this.on('window-resize', callback);
    },
    unregister: function(callback) {
        this.removeListener('window-resize', callback);
    }
});

function broadcast() {
    store.emit('window-resize');
}

window.onresize = broadcast;

module.exports = store;

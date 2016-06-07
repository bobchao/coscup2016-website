// Include library
var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var store = assign({}, EventEmitter.prototype, {
    top: function(){
        return window.pageYOffset || document.documentElement.scrollTop;
    },
    register: function(callback) {
        this.on('window-scroll', callback);
    },
    unregister: function(callback) {
        this.removeListener('window-scroll', callback);
    }
});

function broadcast() {
    store.emit('window-scroll');
}

window.onscroll = broadcast;

module.exports = store;

// Include library
var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

// State of now showing language
var state = 'en';

// Button click -> state change -> UI change
// Inherit nodeJS event library
var store = assign({}, EventEmitter.prototype, {
    getState: function() {
        return state;
    },

    // For UI need to be changed whenever state changed
    // to regist their callback
    register: function(callback) {
        this.on('lang-change', callback);
    },
    unregister: function(callback) {
        this.removeListener('lang-change', callback);
    },

    // For button click to change the state
    setLang: function(newState) {
        // Just guarante state won't be unknown
        if( newState === 'en' )
            state = 'en';
        else if( newState === 'zh' )
            state = 'zh';
        this.emit('lang-change');
    }
});

module.exports = store;

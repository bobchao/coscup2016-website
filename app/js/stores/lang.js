// Include library
var cookie       = require('lib/cookie.js');

// State of now showing language
var state = (() => {
    var cookieSet = cookie.find('lang') || '';
    if( cookieSet === 'en' || cookieSet === 'zh' )
        return cookieSet;

    var navigaSet = navigator.language || '';
    if( navigaSet === 'zh-TW' || navigaSet === 'zh' )
        return 'zh';

    return 'en';
})();

var registeredCallback = [];

// Button click -> state change -> UI change
// Inherit nodeJS event library
var store = {
    getState: function() {
        return state;
    },

    // For UI need to be changed whenever state changed
    // to regist their callback
    register: function(callback) {
        registeredCallback.push(callback);
    },

    // For button click to change the state
    setLang: function(newState) {
        // Just guarante state won't be unknown
        if( newState === 'en' )
            state = 'en';
        else if( newState === 'zh' )
            state = 'zh';
        cookie.insert('lang', state);
        this.emit();
    },
    emit: function() {
        registeredCallback.forEach((callback) => {
            callback();
        });
    }
};

module.exports = store;

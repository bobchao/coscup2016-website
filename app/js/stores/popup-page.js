require('lib/requestAnimationFrame.js');

var content = null;
var callbacks = [];
var durations = [];

function forward(nowid) {
    window.requestAnimationFrame(callbacks[nowid]);
    if( nowid+1 >= callbacks.length )
        return;
    setTimeout(function() {
        forward(nowid+1);
    }, durations[nowid]);
}

function backward(nowid) {
    window.requestAnimationFrame(callbacks[nowid]);
    if( nowid-1 < 0 )
        return;
    setTimeout(function() {
        backward(nowid-1);
    }, durations[nowid+1]);   
}

module.exports = {
    getContent: function() {
        return content;
    },
    show: function(cont) {
        content = cont;
        forward(1);
    },
    close: function() {
        backward(callbacks.length - 1);
    },
    addStep: function(callback, duration) {
        callbacks.push(callback);
        durations.push(duration || 0);
    }
}

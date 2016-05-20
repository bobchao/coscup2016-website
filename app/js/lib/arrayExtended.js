/*
*   Extened built-in array
*/

if( typeof Array.prototype.back === 'undefined' ) {
    // Read the last obj of array. read-only
    Array.prototype.back = function() {
        return this[this.length - 1];
    }
}

if( typeof Array.prototype.swap === 'undefined' ) {
    // Swap two element
    Array.prototype.swap = function(id1, id2) {
        var x = this[id1];
        this[id1] = this[id2];
        this[id2] = x;
    }
}

if( typeof Array.prototype.shuffle === 'undefined' ) {
    // Depend Array.prototype.swap
    // Shuffle the array
    Array.prototype.shuffle = function() {
        var n = this.length;
        for(var i=n; i>0; --i) {
            var id1 = Math.floor(Math.random() * n);
            var id2 = Math.floor(Math.random() * n);
            this.swap(id1, id2);
        }
    }
}

if( typeof Array.prototype.isArray === 'undefined' ) {
    // So that only array.isArray would be true.
    // Maybe...
    Array.prototype.isArray = true;
}

/*
*   This module export function to modify cookie
*/

function insert(key, val) {
    document.cookie = key + '=' + val.toString();
}
function remove(key) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
function find(key) {
    key = key.toString();
    var ret = "";
    document.cookie.split(';').forEach((str) => {
        var tmp = str.trim().split('=');
        if( tmp[0]==key )
            ret = tmp[1];
    })
    return ret || "";
}
function isset(key) {
    key = key.toString();
    var ret = false;
    document.cookie.split(';').forEach((str) => {
        var tmp = str.trim().split('=');
        if( tmp[0]==key )
            ret = true;
    })
    return ret;   
}

module.exports = {
    insert: insert,
    remove: remove,
    find  : find,
    isset : isset
};

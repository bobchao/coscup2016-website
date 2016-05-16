/*
 *	This module exporting dom function
 */

var Q = function(queryStr) {
	return document.querySelector(queryStr);
};
var Qid = function(id) {
	return document.getElementById(id);
};
var Qall = function(queryStr, func) {
	return document.querySelectorAll(queryStr);
};
var addEvent = function(ele, eve, func) {
	if( ele.addEventListener ) ele.addEventListener(eve , func);
	else if( ele.attachEvent ) ele.attachEvent('on'+eve , func);
	else ele[eve] = func;
};
var removeEvent = function(ele, eve, func) {
	if( ele.removeEventListener ) ele.removeEventListener(eve , func);
	else if( ele.detachEvent ) ele.detachEvent('on'+eve , func);
	else ele[eve] = null;
};
var addClass = function(ele , applyclass) {
	if( !ele || typeof ele.className === 'undefined' ) return;
	if( ele.className.indexOf(applyclass)!=-1 ) return;
	if( ele.className.length>0 ) ele.className += ' '+applyclass;
	else ele.className = applyclass;
};
var removeClass = function(ele , classname) {
	if( !ele || typeof ele.className === 'undefined' ) return;
	var reg = new RegExp(classname , "g");
	ele.className = ele.className.replace(reg, "");
};
var getScrollY = function() {
	if (self.pageYOffset)
		return self.pageYOffset;
	else if (document.documentElement && document.documentElement.scrollTop)
		return document.documentElement.scrollTop;
	else if (document.body)
		return document.body.scrollTop;
};
var getY = function(domObj) {
	return domObj.offsetTop;
};
var getX = function(domObj) {
	return domObj.offsetLeft;
};

module.exports = {
	Q: Q,
	Qid: Qid,
	Qall: Qall,
	addEvent: addEvent,
	removeEvent: removeEvent,
	addClass: addClass,
	removeClass: removeClass
}

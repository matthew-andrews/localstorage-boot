(function(e){if("function"==typeof bootstrap)bootstrap("app",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeAPP=e}else"undefined"!=typeof window?window.APP=e():global.APP=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var upgrade = require('./lib/resources.json/client');

console.log(upgrade);
},{"./lib/resources.json/client":2}],2:[function(require,module,exports){
/**
 * Responsible for keeping app resources
 * (Javascript and CSS) up to date.
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times
 */

function storeResources(resources) {
	localStorage.resources = resources;
}


function check(callback) {
	callback(new Error("Not implemented"));
}

module.exports = {
	check: check
};
},{}]},{},[1])(1)
});
;
/**
 * Application Cache Controller.
 *
 * @author Matthew Andrews <matt@mattandre.ws>
 */

// External deps
var express = require('express');

// Internal deps
var resourcesJSON = require('./lib/resources.json');
var boot = require('./lib/boot');

var localStorageBoot = function (options) {
	if (!options || !options.js || !options.css) {
		throw new Error("Paths to JS and CSS resources are required.");
	}

	var app = express();

	// The pre-json encoded applicaton resources for
	// storage in localStorage and use when the app
	// boots from the app cache.
	app.use(resourcesJSON({
		js: options.js,
		css: options.css
	}));

	return app;
};

localStorageBoot.boot = boot;

module.exports = localStorageBoot;
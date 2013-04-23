/**
 * The boot script - used the load up the app from the app cache
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times
 */

// External deps
var express = require('express');
var path = require('path');
var readFile = require('fs').readFile;

// Js cache
var js;

function readJavascriptFile(fileName, callback) {
	if (js) {
		callback(null, js);
	} else {
		readFile(path.join(__dirname, fileName), 'utf-8', callback);
	}
}

module.exports = function(req, res, next) {
	var app = express();

	app.set('view engine', 'jade');
	app.set('views', __dirname);

	readJavascriptFile('dist/client.min.js', function (err, data) {
		app.render('view', { js: data }, function(err, html) {
			res.send(html);
		});
	});
};

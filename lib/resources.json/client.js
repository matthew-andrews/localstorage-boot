/**
 * Responsible for keeping app resources
 * (Javascript and CSS) up to date.
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times
 */
$ = require('jquery');

function storeResources(resources, callback) {
	try {
		localStorage.resources = JSON.stringify(resources);
		if (callback) {
			callback();
		}
	} catch (e) {
		if (callback) {
			callback(e);
		}
	}
}

function onMessage(event) {
	if (event.data && event.data.type && event.data.type === 'boot:start') {
		if (event.data.args) {
			storeResources.apply(window, event.data.args);
		} else {
			check();
		}
		window.removeEventListener("message", onMessage);
	}
}

window.addEventListener("message", onMessage, false);

function check(callback) {
	$.ajax('/resources.json', {
		dataType: 'json',
		success: function(data) {
			storeResources(data, callback);
		}
	});
}
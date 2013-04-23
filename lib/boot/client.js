/**
 * App bootstrap client code
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times
 */
(function () {

	// Deps
	var reqwest = require('reqwest');

	/**
	 * App start failed
	 *
	 * @return void
	 */
	function startFailed(error) {
		alert("I'm sorry, the app can't start right now.");
		if (typeof console !== "undefined") {
			console.log(error);
		}
	}

	function startWithResources(resources, store) {
		var message = {
			type: 'boot:start',
			args: store ? [resources] : []
		};

		// Try to execute the Javascript
		try {
			var app = eval(resources.js);
			window.postMessage(message, '*');

		// If the Javascript fails to launch, stop execution!
		} catch (e) {
			startFailed(e);
		}
	}

	function startWithOfflineResources(error) {
		var resources;

		// If we have resources saved from a previous visit, use them
		if (localStorage && localStorage.resources) {
			resources = JSON.parse(localStorage.resources);
			startWithResources(resources, false);

		// Otherwise, apologize and let the user know
		} else {
			startFailed(error);
		}
	}

	// If we know the device is offline, don't try to load new resources
	if (navigator && navigator.onLine === false) {
		return startWithOfflineResources();
	}

	// Otherwise, download resources, eval them, if successful push them into local storage.
	reqwest({ url: '/resources.json', type: 'json' })
		.then(function(resp) {
			startWithResources(resp, true);
		})
		.fail(function(err) {
			startWithOfflineResources(err);
		});
})();
modules.exports = function () {
	var APP_START_FAILED = "I'm sorry, the app can't start right now.";
	function startWithResources(resources, storeResources) {

		// Try to execute the Javascript
		try {
			var app = eval(resources.js);
			app.start(resources, storeResources);

		// If the Javascript fails to launch, stop execution!
		} catch (e) {
			if (typeof console !== "undefined") {
				console.log(e);
			}
			alert(APP_START_FAILED);
		}
	}

	function startWithOnlineResources(resources) {
		startWithResources(resources, true);
	}

	function startWithOfflineResources(e) {
		var resources;

		// If we have resources saved from a previous visit, use them
		if (localStorage && localStorage.resources) {
			resources = JSON.parse(localStorage.resources);
			startWithResources(resources, false);

		// Otherwise, apologize and let the user know
		} else {
			alert(APP_START_FAILED);
		}
	}

	// If we know the device is offline, don't try to load new resources
	if (navigator && navigator.onLine === false) {
		startWithOfflineResources();

	// Otherwise, download resources, eval them, if successful push them into local storage.
	} else {
		console.warn("Err.. we don't have jQuery :-/");
		// TODO - Must reimplement this.
		// $.ajax({
		// 	url: '/resources.json',
		// 	success: startWithOnlineResources,
		// 	error: startWithOfflineResources,
		// 	dataType: 'json'
		// });
	}
};
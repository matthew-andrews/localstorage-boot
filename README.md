# localstorage-boot

Note - this does not currently work.

<!-- REVIEW: This is all far too complex at the moment... -->

Works with [offline-express](http://www.github.com/matthew-andrews/offline-express) to provide a simple to use, self updating offline app experience.

## Client side usage

Just require the client code at the top of your web application to set up the listeners and the app upgrade process will be handled internally when your app is booted from local storage.

To trigger an update manually it also exposes a single `#check` method that accepts a `callback` that is called with no arguments on success and an `Error` object on failure.

```javascript
upgrade = require('localstorage-boot/client');

// ... Sometime later ...
upgrade.check();
```

### Client side options

None as yet.


### API

#### `#check(callback)`

(Asynchronously) requests the latest app resources (javascript and css) and stores them in CSS.

TODO:
- Later I might add in some more options to pass back to the call of the function whether there was a change or not.
- My personal preference is for `/resources.json` json to also return a key called `hash` with the hash of the Javascript and CSS.
- That hash could be sent up with the request to resources.json within the client side update mechanism and then server could use it to determine if the client side resources are already up - and then return `false` instead of the full (large) css/javascript resources json.

## Server side usage

```javascript
var offlineExpress = require('offline-express/server');
var localStorageBoot = require('localstorage-boot/server');

app.use(localStorageBoot({
	js: path.join(__dirname, 'dist/client.js'),
	css: path.join(__dirname, 'dist/styles.css')
}));

// Use offline-express to handle AppCache.
app.use(offlineExpress({
	api: 'api',
	bootCallback: localStorageBoot.boot
}));
```

### Server side options

#### `js` - required

The system path to your application's built (and ideally compressed) javascript file (to be stored for offline use in localStorage).

#### `css` - required

The system path to your application's built (and ideally compressed) css file (to be stored for offline use in localStorage).


### API

#### `#boot(req, res, next);`

The express middlewear that returns the boot javascript and css (when **localstorage-boot** is used with **offline-express** the file that gets returned by this function is stored in the application cache and is used to start the app).


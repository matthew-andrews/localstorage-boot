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
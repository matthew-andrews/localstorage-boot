
```javascript
{
	js:        path.join(__dirname, 'dist/client.js'),
	css:       path.join(__dirname, 'dist/styles.css'),
}

```

### `js` - required

The system path to your application's built (and ideally compressed) javascript file (to be stored for offline use in localStorage).

### `css` - required

The system path to your application's built (and ideally compressed) css file (to be stored for offline use in localStorage).

#### yourapp.com/[namespace]/resources.json

The pre-json encoded applicaton resources for storage in localStorage and use when the app boots from the app cache.

This end point provides the compiled javascript and css (specified in **offline**'s initialization options object) in a simple json object (see below).

```
{
	js: '/* compiled js code here */',
	css: '/* compiled css code here */'
}
```

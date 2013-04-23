/**
 * Module Dependencies
 */

var browserify = require('browserify');

/**
 * Exports
 */

module.exports = function (grunt) {
	grunt.registerTask('browserify', function() {
		var done = this.async();
		var files = {
			'/../dist/client.js' : '/../client.js',
			'/../dist/boot/client.js' : '/../lib/boot/client.js'
		};
		var count = 0;

		function success() {
			if (--count === 0) {
				done();
			}
		}

		function build(o, i) {
			browserify(__dirname + i)
				.bundle({ standalone: 'APP' }, function(err, string) {
					if (err && err.message) {
						console.log(err.message);
					} else {
						grunt.file.write(__dirname + o, string);
						grunt.log.writeln('Written ' + o + ' (' + String(string.length).green + ' bytes)');
					}
					success();
				});
		}

		for (var file in files) {
			count++;
			build(file, files[file]);
		}
	});
};
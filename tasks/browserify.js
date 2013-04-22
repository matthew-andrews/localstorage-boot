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

		browserify(__dirname + '/../client.js')
			.bundle({ standalone: 'APP' }, function(err, string) {
				if (err && err.message) {
					console.log(err.message);
				} else {
					grunt.file.write('dist/client.js', string);
					grunt.log.writeln('Written dist/client.js (' + String(string.length).green + ' bytes)');
				}
				done();
			});
	});
};
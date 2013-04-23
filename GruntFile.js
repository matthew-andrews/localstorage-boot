module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			iframe_client: {
				files: {
					'lib/boot/dist/client.min.js': ['lib/boot/dist/client.js'],
					'dist/client.min.js': ['dist/client.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', ['browserify', 'uglify']);
};
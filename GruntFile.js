module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			iframe_client: {
				files: {
					'dist/boot/client.min.js': ['dist/boot/client.js'],
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
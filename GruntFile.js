module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			iframe_cient: {
				files: {
					'lib/boot/client.min.js': ['lib/boot/client.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
	grunt.registerTask('default', ['uglify']);
};
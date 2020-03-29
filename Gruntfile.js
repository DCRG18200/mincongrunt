module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'js/scripts.js',
				dest: 'js/scripts.min.js'
			}
		},
		cssmin: {
			css: {
				src: 'css/styles.css',
				dest: 'css/styles.min.css'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', [ 'uglify' ]);

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
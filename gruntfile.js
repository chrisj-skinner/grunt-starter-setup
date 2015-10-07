module.exports = function(grunt){

	// Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// setup uglify task
		uglify: {
			build: {
				files: {
					'js/scripts.min.js': ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'src/js/*.js']
				},
			},
			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				files: {
					'js/scripts.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js', 'src/js/*.js']
				},
			},
		},

		// setup watch task
		watch: {
			js: {
				files: ['bower_components/**/*.js', 'src/js/*.js'],
				tasks: ['uglify:dev']
			},
			css: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass:dev']
			},
		},

		// setup sass
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'css/styles.min.css' : 'src/scss/styles.scss'
				},
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/styles.min.css' : 'src/scss/styles.scss'
				},
			},
		},
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// Register task(s)
	grunt.registerTask('default', ['uglify:dev','sass:dev']);
	grunt.registerTask('build', ['uglify:build', 'sass:build']);
};
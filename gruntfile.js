module.exports = function(grunt){

	// Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// setup uglify task
		uglify: {
			build: {
				src: 'src/js/*.js',
				dest: 'js/scripts.min.js'
			},
			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'src/js/*.js',
				dest: 'js/scripts.min.js'
			},
		},

		// setup watch task
		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev']
			},
			css: {
				files: ['src/sass/**/*.scss'],
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
					'css/styles.min.css' : 'src/sass/styles.scss'
				},
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/styles.min.css' : 'src/sass/styles.scss'
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
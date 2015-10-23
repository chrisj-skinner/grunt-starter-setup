module.exports = function(grunt){

	// var mozjpeg = require('imagemin-mozjpeg');

	// Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// setup uglify task
		uglify: {
			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'src/js/*.js',			// Src path
				dest: 'js/scripts.min.js'	// Destination path
			},
			build: {
				src: 'src/js/*.js',			// Src path
				dest: 'js/scripts.min.js' 	// Destination path
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
					// Destination path followed by Src Path
				},
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/styles.min.css' : 'src/sass/styles.scss'
					// Destination path followed by Src Path
				},
			},
		},

		// setup imagemin
		imagemin: {
			build: {

				files: [{
					expand: true,				// Enable dynamic expansion
					cwd: 'src/',				// Src matches are relative to this path
					src: ['**/*.{png,jpg,gif}'],// Patterns to match
					dest: ''					// Destination path
				}]
			},
		},
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Register task(s)
	grunt.registerTask('default', ['sass:dev']);
	grunt.registerTask('build', ['uglify:build', 'sass:build', 'imagemin:build']);
};
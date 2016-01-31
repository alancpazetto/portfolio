'use strict';
module.exports = function (grunt) {

	grunt.initConfig({
		sass : {
			dist: {
				files: {
					'./app/css/layout.css' : './scss/layout.scss'
				},
				options:{
					style : 'compressed'
				}
			}
		},
		watch : {
			options: {
				livereload : true
			},
		    js: {
		        files: "./app/js/*.js"
		    },
		    html: {
		        files: "./app/*.html"
		    },
			css : {
				files : './scss/*.scss',
				tasks : ['sass']
			}
		},
		connect : {
			server : {
				options : {
					port : 5000,
					// hostname: '192.168.1.19',
					base : 'app',
					open : true,
					useAvailablePort : true,
					keepalive : true,
					livereload : true
				}
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			serve: {
				tasks: ["watch", "connect:server"]
			}
		},
		dist : {
			
		},
		copy : {
			main : {
				files: [
					{
						expand: true, 
						src: [
							'app/**/*.html', 
							'app/css/*.css',
							'app/**/*.svg',
							'app/**/*.eot',
							'app/**/*.ttf',
							'app/**/*.woff',
							'app/**/*.otf',
							'app/**/*.jpg',
							'app/**/*.jpeg',
							'app/**/*.png',
						], 
						dest: './dist/', 
						filter: 'isFile'
					}
			    ]
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'dist/app/js/script.min.498ch89.js': [
						'app/lib/angularjs/angular.min.js',
						'app/js/app.js',
						'app/js/controllers.js',
						'app/js/directives.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concurrent:serve']);
	grunt.registerTask('dist', [
		'copy:main',
		'uglify:dist'
	]);

};
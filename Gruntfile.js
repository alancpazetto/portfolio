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
			css : {
				files : './scss/*.scss',
				tasks : ['sass']
			}
		},
		connect : {
			server : {
				options : {
					port : 5000,
					base : 'app',
					open : true,
					useAvailablePort : true,
					keepalive : true
				}
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			prod: {
				tasks: ["watch", "php"]
			},
			serve: {
				tasks: ["watch", "connect:server"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['concurrent:serve']);

};
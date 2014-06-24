module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
          "Gruntfile.js",
          "lib/**/*.js",
          "spec/**/*.js"
      ]
    },
    jasmine: {
      dev: {
        src: "lib/**/*.js",
        options: {
          specs: "spec/**/*.js"
        }
      }
    },
    watch: {
      files: [
        'lib/**/*.js',
        'spec/**/*.js',
        'Gruntfile.js'
      ],
      tasks: ['jasmine']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['jasmine', 'watch']);
};
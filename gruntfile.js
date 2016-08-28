module.exports = function(grunt) {

  grunt.initConfig({
    bake: {
    build: {
      files: {
        'public/index.html' : 'templates/mainpage.html'
      }
    }
  }

  });

  grunt.loadNpmTasks('grunt-bake');

};

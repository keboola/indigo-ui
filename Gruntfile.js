module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: [
            "node_modules"
          ],
          modifyVars: {
            "libsPath" : ""
          }
        },
        files: {
          "public/css/kbc.uncompressed.css": "src/kbc-bootstrap/less/kbc.less"
        }
      },
    },
    watch: {
      less: {
        files: ['src/kbc-bootstrap/less/kbc.less'],
        tasks: ['less:development'],
        options: {
          spawn: false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build-css', ['less:development']);

};

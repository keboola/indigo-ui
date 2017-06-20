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
    copy: {
      dev: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: 'public/fonts'
          },
          {
            expand: true,
            cwd: 'src/kbc-bootstrap',
            src: ['fonts/*'],
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'src/kbc-bootstrap',
            src: ['img/*'],
            dest: 'public/'
          }
        ]
      },
    },
    watch: {
      less: {
        files: ['src/kbc-bootstrap/less/kbc.less'],
        tasks: ['less:development'],
        options: {
          spawn: false,
          livereload: true,
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build-css', ['copy:dev', 'less:development']);

};

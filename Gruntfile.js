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
          "public/css/indigo.uncompressed.css": "src/styles/indigo-storybook.less"
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
            cwd: 'src/indigo',
            src: ['fonts/*'],
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'src/indigo',
            src: ['img/*'],
            dest: 'public/'
          }
        ]
      },
    },
    watch: {
      less: {
        files: [
          'src/styles/indigo-storybook.less',
          'src/indigo/less/*.less'
        ],
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

  grunt.registerTask('build-dev-css', ['copy:dev', 'less:development']);

};

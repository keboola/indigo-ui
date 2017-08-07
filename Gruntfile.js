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
      revision: {
        expand: true,
        cwd: 'public/',
        src: ['**']
      }
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

  grunt.registerTask('read-revision', function() {
    grunt.task.requires("build");
    grunt.event.once("git-describe", function(rev) {
      grunt.log.writeln("Git Revision: " + rev[0]);
      grunt.config("copy.revision.dest", 'revision/' + rev[0] + '/');
    });
    grunt.task.run("git-describe");
  });

  grunt.registerTask('build-css', ['copy:dev', 'less:development']);
  grunt.registerTask('prepare-revision', ['read-revision', 'copy:revision']);

};

module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: ["dist/*", "revision/*", "tmp/*"]
          }
        ]
      }
    },
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
      production: {
        options: {
          cleancss: true,
          compress: true,
          paths: ["node_modules"],
          modifyVars: {
            "libsPath" : ""
          }
        },
        files: {"tmp/css/indigo.css": "src/indigo/less/indigo.less"}
      }
    },
    compress: {
      production: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'tmp/css',
        src: ['**/*'],
        dest: 'dist/css/'
      }
    },
    copy: {
      uncompressed: {
        nonull: true,
        src: 'tmp/css/indigo.css',
        dest: 'dist/css/indigo.uncompressed.css'
      },
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
      dist: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: 'dist/fonts'
          },
          {
            expand: true,
            cwd: 'src/indigo',
            src: ['fonts/*'],
            dest: 'dist/'
          },
          {
            expand: true,
            cwd: 'src/indigo',
            src: ['img/*'],
            dest: 'dist/'
          }
        ]
      },
      revision: {
        expand: true,
        cwd: 'dist/',
        src: ['**']
      }
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
          livereload: {
            key: grunt.file.read('./.dev/certs/ssl.key'),
            cert: grunt.file.read('./.dev/certs/ssl.crt')
          }
        }
      }
    },
    exec: {
      'git-describe': {
        cmd: 'git describe --tags --always --long | tr -d "\n"',
        callback: function(err, stdout, stderr) {
          grunt.event.emit('exec:git-describe', stdout)
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('read-revision', function() {
    grunt.task.requires("build");
    grunt.event.once("exec:git-describe", function(rev) {
      grunt.log.writeln("Git Revision: " + rev);
      grunt.config("copy.revision.dest", 'revision/' + rev + '/');
    });
    grunt.task.run("exec:git-describe");
  });

  grunt.registerTask('build', ['clean', 'less', 'copy:uncompressed', 'compress', 'copy:dist']);
  grunt.registerTask('build-dev-css', ['copy:dev', 'less:development']);
  grunt.registerTask('prepare-revision', ['read-revision', 'copy:revision']);

};

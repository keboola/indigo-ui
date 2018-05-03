module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: [
            "node_modules"
          ],
          modifyVars: {
            "libsPath": ""
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
    svg_sprite: {
      dev: {
        expand: true,
        cwd: 'src/icons',
        src: ['**/*.svg'],
        dest: 'src/indigo/img',
        options: {
          log: 'info',
          shape: {
            dimension: {
              // maxWidth: 32,
              maxHeight: 32
            },
            spacing: {
              padding: 1
            },
          },
          mode: {
            symbol: {
              bust: false,
            },
          }
        }
      },
    },
    watch: {
      less: {
        files: [
          'src/styles/indigo-storybook.less',
          'src/indigo/less/*.less',
        ],
        tasks: ['less:development', 'stylelint'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      icons: {
        files: [
          'src/icons/*.svg'
        ],
        tasks: ['svg_sprite:dev'],
        options: {
          spawn: false,
          livereload: true,
        }
      }
    },
    stylelint: {
      all: ['src/indigo/less/*.less'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svg-sprite');
  grunt.loadNpmTasks('grunt-stylelint');

  grunt.registerTask('build-dev-css', ['svg_sprite:dev', 'copy:dev', 'less:development', 'stylelint']);

};

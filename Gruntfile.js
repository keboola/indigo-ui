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
    },
    exec: {
      'icons-to-react-components': {
        cmd: 'yarn svgr --ext jsx --single-quote -d src/indigo/components/icons src/icons'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build-dev-css', ['svg_sprite:dev', 'copy:dev', 'less:development', 'stylelint']);

};

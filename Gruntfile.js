module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: [
            "node_modules"
          ],
          modifyVars: {
            libsPath: ""
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
            src: ['img/**'],
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
        tasks: ['exec:svg-react-transformer'],
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
      'svg-react-transformer': {
        cmd: `yarn svg-react-transformer src/icons/*.svg -d src/indigo/components/icons -c src/svg-react-transformer.config.js
        && node src/generate-icons-index.js`
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build-dev-css', ['exec:svg-react-transformer', 'copy:dev', 'less:development', 'stylelint']);
  grunt.registerTask('prepare-prod-resources', ['copy:dev', 'less:development']);

};

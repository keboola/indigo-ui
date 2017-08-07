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
          },
          {
            expand: true,
            cwd: 'src/indigo/icons/',
            src: ['icon-sprite/*'],
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
        files: ['src/styles/indigo-storybook.less'],
        tasks: ['less:development'],
        options: {
          spawn: false,
          livereload: true,
        }
      }
    },
    svg_sprite: {
      your_target: {
        expand: true,
        cwd: 'src/indigo/icons',
        src: ['**/*.svg'],
        dest: 'src/indigo/icons',
        options: {
          mode: {
            css: {		// Activate the «css» mode
              cwd: 'src/indigo/icons',
              sprite: '../icon-sprite/spriteeeeeee.svg',
              prefix: '.icon-%s',
              render: {
                less: {
                  dest: '../../less/svg-icons.less' // LESS location
                },
              }
            }
          }
        },
        // svg: {
        //   dimensionAttributes: true
        // },
        shape: {
          //   dimension		: {                         // Dimension related options
          //     maxWidth	: 2000,                     // Max. shape width
          //     maxHeight	: 2000,                     // Max. shape height
          //     precision	: 2,                        // Floating point precision
          //     attributes 	: true,                    // Width and height attributes on embedded shapes
          //   },
          spacing: {                         // Spacing related options
            padding: 10,                        // Padding around all shapes
            box: 'padding'                 // Padding strategy (similar to CSS `box-sizing`)
          },
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svg-sprite');

  grunt.registerTask('read-revision', function() {
    grunt.task.requires("build");
    grunt.event.once("git-describe", function(rev) {
      grunt.log.writeln("Git Revision: " + rev[0]);
      grunt.config("copy.revision.dest", 'revision/' + rev[0] + '/');
    });
    grunt.task.run("git-describe");
  });

  grunt.registerTask('build-css', ['svg_sprite', 'copy:dev', 'less:development']);
  grunt.registerTask('prepare-revision', ['read-revision', 'copy:revision']);

};

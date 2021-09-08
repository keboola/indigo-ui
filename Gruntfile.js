module.exports = (grunt) => {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['node_modules'],
        },
        files: {
          'public/css/indigo.uncompressed.css': 'src/styles/indigo-storybook.less',
        },
      },
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: 'public/fonts',
          },
          {
            expand: true,
            cwd: 'src/indigo',
            src: ['img/**'],
            dest: 'public/',
          },
        ],
      },
    },
    watch: {
      less: {
        files: ['src/styles/indigo-storybook.less', 'src/indigo/less/**/*.less'],
        tasks: ['less:development', 'stylelint'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },
    stylelint: {
      all: ['src/indigo/less/*.less'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-stylelint');

  grunt.registerTask('build-dev-css', ['copy:dev', 'less:development', 'stylelint']);
  grunt.registerTask('prepare-prod-resources', ['copy:dev', 'less:development']);
};
